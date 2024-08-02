import { useContext, useEffect, useMemo, useRef, useState } from "react"
import { MyTitle } from "./PageMy"
import './mycommunity.css';
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../../../App";
import { USER_TYPE_ADMIN, USER_TYPE_PARENT, USER_TYPE_STUDENT, USER_TYPE_TEACHER } from "../../../datas/usertypes";
import { ButtonMedium, ButtonTab } from "../../generic/Buttons";
import { DropdownItem, DropdownLarge, SimpleDropdown } from "../../generic/Dropdown";
import { UserCard } from "../../generic/user/UserCard";
import { InputText } from "../../generic/Input";
import * as User from '/src/utils/User';

const tabs = [
	['students','나의 학생들'],
	['search','학생찾기'],
	['mentor','나의 선생님/부모님'],
	['invitation','받은 초대']
]

export function Left({handleTrigger}) {
	const navigate = useNavigate();
	const { user } = useContext(userContext);
	const params = useParams();
	const tabId = params.tabId?params.tabId:'students';
	//표시할 항목들
	const displayItems = useMemo(()=>{
		if (!user) {
			return [];
		}
		let arr = [];
		switch (user.userTypeId) {
		// 학생
		case USER_TYPE_STUDENT:
			arr = [
				tabs[2],
				tabs[3]
			];
			break;
		// 부모
		case USER_TYPE_PARENT:
			arr = [
				tabs[0],
				tabs[1],
				// tabs[3],
			];
			break;
		// 교사
		case USER_TYPE_TEACHER:
			arr = [
				tabs[0],
				tabs[1],
				// tabs[3]
			];
			break;
		// 어드민
		case USER_TYPE_ADMIN:
			arr = [
				tabs[0],
				tabs[1],
				tabs[2],
				tabs[3]
			];
			break;
		}
		return arr;
	},[user])
	//디스플레이인덱스
	const displayIndex = useMemo(()=>{
		let val = displayItems.findIndex((item)=>{
			return item[0]===tabId;
		});
		if (isNaN(val)||val<0) {
			return 0;
		}
		return val;
	},[tabId,displayItems])
	//트리거
	useEffect(()=>{
		let newTabId = tabId?tabId:'all';
		handleTrigger.trigger({
			target:'community',
			tabId:newTabId
		})
	},[tabId]);
	//회원유형 체크 후 접근할 수 없는 탭이면 강제이동
	useEffect(()=>{
		if (!user) {return;}
		if (!displayItems) {return;}
		if (!displayItems.find((item)=>{
			return item[0] === tabId;
		})) {
			navigate(`/my/community/${displayItems[0][0]}`);
		}
	},[tabId,displayItems,user]);
	return <>
		<div className="myCommunity myLeftBox">
			<MyTitle title={'커뮤니티'}/>
			<div className="tabs">
				{displayItems.map((item,index)=>{
					return <ButtonTab key={index} icon={<></>} to={`/my/community/${item[0]}`} active={tabId===item[0]}>{item[1]}</ButtonTab>
				})}
			</div>
		</div>
		<div className="myCommunity myLeftBoxAlter">
			<DropdownLarge displayIndex={displayIndex}>
				{displayItems.map((item,index)=>{
					return <DropdownItem key={index} className={'large'} to={`/my/community/${item[0]}`}>{item[1]}</DropdownItem>
				})}
			</DropdownLarge>
		</div>
	</>
}

export function Main({handleTabIndex,index,trigger}) {
	const { user, users, friends, invitations } = useContext(userContext);
	//검색창
	const inputTextRef = useRef(null);
	const [searchInput,setSearchInput] = useState('');
	const [searchMode,setSearchMode] = useState(0);
	const handleSearchInput = {
		set:(e)=>{
			if (e&&e.key) {
				if (e.key ==='Enter') {
					setSearchInput(inputTextRef.current.value);
					return;
				} else {
					return;
				}
			}
			setSearchInput(inputTextRef.current.value);
		}
	}
	// 검색창 지우기
	useEffect(()=>{
		if (inputTextRef.current) {
			inputTextRef.current.value = '';
		}
	},[searchMode]);
	const handleSearchMode = {
		set:(e)=>{
			setSearchMode(parseInt(e.target.value));
		}
	}
	//리스트구성
	const targetUsers = useMemo(()=>{
		if (!user||!users) {return null;}
		if (!trigger) {return null;}
		if (!trigger.tabId) {return null;}
		switch (trigger.tabId) {
		case 'students' :
			//학생목록
			return friends.filter((friendItem)=>{
				return parseInt(friendItem.userId1)===parseInt(user.userId)
					|| parseInt(friendItem.userId2)===parseInt(user.userId)
			})
			.map((friendItem)=>{
				let newUserId = (parseInt(friendItem.userId1) === parseInt(user.userId))
					?parseInt(friendItem.userId2)
					:parseInt(friendItem.userId1);
				return newUserId;
			})
		case 'search' :
			// 학생검색
			// 검색창 비어있으면 생략
			if (searchInput.length<=0) {
				return null;
			}
			// 유저리스트에서 필터링
			return users.filter((userItem)=>{
				let bool = true;
				//자기 자신은 안뜸
				if (parseInt(user.userId)===parseInt(userItem.userId)) {return false;}
				//학생만 떠야함
				if (parseInt(userItem.userTypeId)!==USER_TYPE_STUDENT) {return false;}
				switch (parseInt(searchMode)) {
				case 0:
					// 이름으로
					bool = userItem.name.includes(searchInput);
					break;
				case 1:
					// 학교이름으로
					bool = userItem.schoolName.includes(searchInput);
					break;
				case 2:
					// 식별코드로
					bool = User.evaluateId(searchInput,userItem.userId);
					break;
				}
				return bool;
			})
			.map((userItem)=>{
				return userItem.userId;
			});
		case 'mentor' :
			//부모님 선생님
			return friends.filter((friendItem)=>{
				return parseInt(friendItem.userId1)===parseInt(user.userId)
					|| parseInt(friendItem.userId2)===parseInt(user.userId)
			})
			.map((friendItem)=>{
				let newUserId = (parseInt(friendItem.userId1) === parseInt(user.userId))
					?parseInt(friendItem.userId2)
					:parseInt(friendItem.userId1)
				return {
					userId:newUserId,
					userTypeId:users.filter((userItem)=>{
							return parseInt(newUserId) === parseInt(userItem.userId);
					})[0].userTypeId
				}
			});
		case 'invitation' :
			//초대목록
			return invitations.filter((invitationItem)=>{
				return parseInt(invitationItem.toUserId)===parseInt(user.userId)
			})
			.map((invitationItem)=>{
				return parseInt(invitationItem.fromUserId);
			});
		default : 
			return <></>
		}
	},[trigger,user,users,searchInput,searchMode,friends,invitations]);
	// JSX 구성
	const jsx = useMemo(()=>{
		const newTargetUsers = targetUsers?targetUsers:[];
		switch (trigger.tabId) {
		case 'students' :
			return <>
				<MyTitle title={'나의 학생들'}/>
				<div className="myCommunity cardContainer">
					{newTargetUsers.map((targetUserId)=>{
						return <UserCard type={0} key={targetUserId} userId={targetUserId}/>
					})}
				</div>
			</>
		case 'search' :
			return <>
				<MyTitle title={'학생찾기'}/>
				<div className="myCommunity searchAndCards">
					{/* 서치필드 */}
					<div className="searchField">
						<SimpleDropdown onChange={handleSearchMode.set}>
							<option className="font_main" value={'0'}>학생 이름</option>
							<option className="font_main" value={'1'}>학교 이름</option>
							<option className="font_main" value={'2'}>식별코드</option>
						</SimpleDropdown>
						<InputText outerRef={inputTextRef} value={searchInput} onKeyDown={handleSearchInput.set}/>
						<ButtonMedium className={'buttonSearch'} onClick={handleSearchInput.set}>찾기</ButtonMedium>
					</div>
					{/* 리스트 */}
					<div className="myCommunity cardContainer">
					{newTargetUsers.map((targetUserId)=>{
						return <UserCard type={1} key={targetUserId} userId={targetUserId}/>
					})}
					</div>
				</div>
			</>
		case 'mentor' :
			return <>
				<MyTitle title={'나의 부모님'}/>
				<div className="myCommunity cardContainer">
					{newTargetUsers
						.filter((targetObject)=>{
							return parseInt(targetObject.userTypeId) === USER_TYPE_PARENT
								// || parseInt(targetObject.userTypeId) === USER_TYPE_ADMIN;
						})
						.map((targetObject)=>{
							return <UserCard type={2} key={targetObject.userId} userId={targetObject.userId}/>
						})
					}
				</div>
				<MyTitle title={'나의 선생님'}/>
				<div className="myCommunity cardContainer">
					{newTargetUsers
						.filter((targetObject)=>{
							return parseInt(targetObject.userTypeId) === USER_TYPE_TEACHER
								// || parseInt(targetObject.userTypeId) === USER_TYPE_ADMIN;
						})
						.map((targetObject)=>{
							return <UserCard type={2} key={targetObject.userId} userId={targetObject.userId}/>
						})
					}
				</div>
			</>
		case 'invitation' :
			return <>
				<MyTitle title={'받은 초대'}/>
				<div className="myCommunity cardContainer">
					{newTargetUsers.map((targetUserId)=>{
						return <UserCard type={3} key={targetUserId} userId={targetUserId}/>
					})}
				</div>
			</>
		default : 
			return <></>
		}
	},[targetUsers,trigger])
	useEffect(()=>{
		handleTabIndex.set(index);
	},[])
	return <div className="contents">
		{jsx}
	</div>
}
import { useEffect, useMemo } from "react"
import { MyTitle } from "./PageMy"

import './myqna.css';
import { useParams } from "react-router-dom";
import { InputText } from "../../generic/Input";
import { ButtonIcon } from "../../generic/Buttons";

import { FiSend } from "react-icons/fi";

export function Left({}) {
	return <></>
}

export function Main({handleTabIndex,index}) {
	const { userId } = useParams();
	// 하단구성물
	const bottomJSX = useMemo(()=>{
		if (!isNaN(userId)) {
			// 개인채팅
		} else {
			// 채팅리스트
			return  <>
				<div className="searchField">
					<InputText placeholder={'학생이름검색'}/>
					<ButtonIcon icon={
						<FiSend/>
					}/>
				</div>
			</>
		}
	},[userId]);
	// 탭인덱스
	useEffect(()=>{
		handleTabIndex.set(index);
	},[])
	return <div className="contents">
		<div className="myQNA">
			<div className="header">
				<div className="font_medium">
					{!isNaN(userId)
						?''
						:'Q&A목록'
					}
				</div>
			</div>
			<div className="middleWrapper">
				<div className="middleContents">
					
				</div>
			</div>
			<div className="bottom">
				{bottomJSX}
			</div>
		</div>
	</div>
}
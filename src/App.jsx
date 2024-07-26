import './App.css'
import { Routes, Route } from 'react-router-dom'
import { PageMain } from '/src/components/pages/main/PageMain'
import { PagePlay } from '/src/components/pages/play/PagePlay'
import { PageIntro } from '/src/components/pages/intro/PageIntro'
import { PageNotice } from '/src/components/pages/notice/PageNotice'
import { PageMy } from '/src/components/pages/my/PageMy'
import { PageLogin } from '/src/components/pages/login/PageLogin'
import { PageRegister } from '/src/components/pages/register/PageRegister'
import { createContext, useEffect, useReducer, useState } from 'react'
import { bookmarksDefault, bookmarksReducer } from './datas/bookmarks'
import { usersDefault, usersReducer } from './datas/users'
import { achievementsDefault, achievementsReducer } from './datas/achievements'

export const userContext = createContext(null);

function App() {
	const [userContextValue,setUserContextValue] = useState({
		user:null,	
	});
	const [bookmarks,dispatchBookmarks] = useReducer(bookmarksReducer,bookmarksDefault);
	const [achievements,dispatchAchievements] = useReducer(achievementsReducer,achievementsDefault);
	const [users,dispatchUsers] = useReducer(usersReducer,usersDefault);
	const handleUserContext = {
		setUser:(newUser)=>{
			// 유저객체 변경
			setUserContextValue((prev)=>{
				return {
					...prev,
					user:newUser
				}
			})
		},
		logout:()=>{
			setUserContextValue((prev)=>{
				return {
					...prev,
					user:null
				}
			})
		}
	}
	useEffect(()=>{
		handleUserContext.setUser(users[0]);
	},[])
   	return <>
		<userContext.Provider value={{
			...userContextValue,
			handleUserContext:handleUserContext,
			bookmarks:bookmarks,
			dispatchBookmarks:dispatchBookmarks,
			achievements:achievements,
			dispatchAchievements:dispatchAchievements,
			users:users,
			dispatchUsers:dispatchUsers,
		}}>
			<Routes>
				{/* 메인 */}
				<Route path={'/*'} element={<PageMain/>}/>
				<Route path={'/main'} element={<PageMain/>}/>
				{/* 문제풀이페이지 */}
				{/* <Route path={'/play/:actId/:subjectId/'}/> */}
				<Route path={'/play/0'} element={<PagePlay/>}/>
				{/* 사이트소개 */}
				<Route path={'/intro/*'} element={<PageIntro/>}/>
				{/* 공지리스트 */}
				<Route path={'/notice/*'} element={<PageNotice/>}/>
				{/* 마이페이지 */}
				<Route path={'/my/*'} element={<PageMy/>}/>
				{/* 로그인 선택 */}
				<Route path={'/login/*'} element={<PageLogin/>}/>
				{/* 회원가입 */}
				<Route path={'/register/*'} element={<PageRegister/>}/>
			</Routes>
		</userContext.Provider>
	</>
}

export default App
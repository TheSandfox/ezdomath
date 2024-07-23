import './App.css'
import { Routes, Route } from 'react-router-dom'
import { PageMain } from '/src/components/pages/main/PageMain'
import { PagePlay } from '/src/components/pages/play/PagePlay'
import { PageIntro } from '/src/components/pages/intro/PageIntro'
import { PageNotice } from '/src/components/pages/notice/PageNotice'
import { PageMy } from '/src/components/pages/my/PageMy'
import { PageLogin } from '/src/components/pages/login/PageLogin'
import { PageRegister } from '/src/components/pages/register/PageRegister'
import { createContext, useEffect, useState } from 'react'
import { getUser } from './utils/User'

export const userContext = createContext(null);

import Navigation from './components/pages/navigation/navigation'

function App() {
	const [userContextValue,setUserContextValue] = useState({
		user:null,	
	});
	const handleUserContext = {
		setUser:(newUser)=>{
			// 유저객체 변경
			setUserContextValue((prev)=>{
				return {
					...prev,
					user:newUser
				}
			})
		}
	}
	useEffect(()=>{
		handleUserContext.setUser(getUser());
	},[])
   	return <>
		<userContext.Provider value={{
			...userContextValue,
			handleUserContext:handleUserContext
		}}>
		    <Navigation/>
			<Routes>
				{/* 메인 */}
				<Route path={'*'} element={<PageMain/>}/>
				<Route path={'/main'} element={<PageMain></PageMain>}/>
				{/* 문제풀이페이지 */}
				<Route path={'/play/:actId/:subjectId'} element={<PagePlay/>}/>
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
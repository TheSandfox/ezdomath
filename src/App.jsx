import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { SubjectDetail } from './components/SubjectDetail'

function App() {
   	return <>
		<Link to={'/detail/0'}>ㅇㅇㅇㅇ</Link>
		<Routes>
			<Route path={'/'} element={<></>}/>
			<Route path={'/detail/:subjectId'} element={<SubjectDetail/>}/>
			<Route exact path={'/detail'} element={<SubjectDetail/>}/>
		</Routes>
	</>
}

export default App

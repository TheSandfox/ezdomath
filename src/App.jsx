import './App.css'
import { SubjectDetail } from './components/SubjectDetail'
import { Routes, Route } from 'react-router-dom'

function App() {
   	return <>
		<Routes>
			<Route path={'*'} element={<></>}/>
			<Route path={'/detail/:subjectId'} element={<SubjectDetail/>}/>
		</Routes>
	</>
}

export default App
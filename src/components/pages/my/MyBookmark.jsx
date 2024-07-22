import { useEffect } from "react"
import { MyTitle } from "./PageMy"

export function Left({}) {
	return <></>
}

export function Main({handleTabIndex,index}) {
	useEffect(()=>{
		handleTabIndex.set(index);
	},[])
	return <div className="contents">
		<MyTitle title={'북마크'}/>
	</div>
}
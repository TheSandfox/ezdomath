// import "./section2.css";
// import { userContext } from "../../../../../App";
// import { SubjectCard } from "../../../../generic/subject/SubjectCard";
// import { act, useContext, useEffect, useMemo, useReducer, useState } from "react"

// export function Section2({handleTabIndex, index, trigger}) {
  
//   const { user, bookmarks, dispatchBookmarks } = useContext(userContext);
// 	const cards = useMemo(()=>{
// 		if (!user) {
// 			return [];
// 		}
// 		return bookmarks
// 		.filter((item)=>{
// 			// 북마크에 존재
// 			return parseInt(item.userId) === parseInt(user.userId);
// 		})
// 		.filter((item)=>{
// 			// 액트인덱스 검증
// 			return (!trigger.actId||trigger.actId==='all') 
// 				|| parseInt(SUBJECTS[item.subjectId].actId) === parseInt(trigger.actId);
// 		})
// 		.map((item)=>{
// 			return item.subjectId;
// 		});
// 	},[user,trigger]);
// 	useEffect(()=>{
// 		handleTabIndex.set(index);
// 	},[]);

//   return (
//     <section className="flex main_page_section main_page_sec2">
//       <article className="flex main_page_sec2_inner">
//         <h2></h2>
//         <div className="myCardContainer">
//           {cards.map((subjectId) => {
//             return (
//               <SubjectCard key={subjectId} type={0} subjectId={subjectId} />
//             );
//           })}
//         </div>
//         <div></div>
//       </article>
//     </section>
//   );
// }

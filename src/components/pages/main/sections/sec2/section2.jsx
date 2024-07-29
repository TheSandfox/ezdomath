import "./section2.css";
import React, { useState, useContext, useEffect } from "react";
import { SubjectCard } from "../../../../generic/subject/SubjectCard";
import { SUBJECTS } from "../../../../../datas/subjects";
import { userContext } from "../../../../../App";
import { ButtonMedium } from "../../../../generic/Buttons";

export function Section2() {
  const { user } = useContext(userContext);

  const [displayedSubjects, setDisplayedSubjects] = useState([]);
  const [initialSubjects, setInitialSubjects] = useState([]); // 가져온 문제 데이터를 메인 페이지에선 랜덤으로 뿌려서 그걸 확인하고 더보기 및 접기 버튼을 유동적으로 사용하기 위해 추가
  const [loadedCount, setLoadedCount] = useState(0); // 화면에 출력된 문제 갯수 파악하기 위해 추가
  const [showCollapse, setShowCollapse] = useState(false); // 문제 더보기 및 접기 버튼 유동적으로 변화하게 하기 위해 추가

  // 초기 로딩 시 8개의 랜덤 서브젝트 로드
  useEffect(() => {
    loadMoreSubjects(8, true);
  }, []);

  const loadMoreSubjects = (count, isInitial = false) => {
    const availableSubjects = SUBJECTS.filter(
      sub => !displayedSubjects.includes(sub.subjectId)
    );
    const randomSubjects = availableSubjects.sort(() => 0.5 - Math.random()).slice(0, count);
    setDisplayedSubjects(prev => [
      ...prev,
      ...randomSubjects.map(sub => sub.subjectId)
    ]);
    setLoadedCount(prev => prev + randomSubjects.length);
    if (isInitial) {
      setInitialSubjects(randomSubjects.map(sub => sub.subjectId));
    }
  };

  const handleCollapse = () => {
    setDisplayedSubjects(initialSubjects);
    setLoadedCount(initialSubjects.length);
    setShowCollapse(false);
  };

  useEffect(() => {
    setShowCollapse(loadedCount === SUBJECTS.length && loadedCount > initialSubjects.length);
  }, [loadedCount, initialSubjects]);

  return (
    <section className="flex main_page_section main_page_sec2">
      <article className="flex main_page_sec2_inner">
        <h2>문제 리스트</h2>
        <div className="myCardContainer">
          {displayedSubjects.map(subjectId => (
            <SubjectCard key={subjectId} type={2} subjectId={subjectId} />
          ))}
        </div>
        <div className="flex sec2_btn_wrap">
          <ButtonMedium className={'none'}>빈공간임</ButtonMedium>
          {loadedCount < SUBJECTS.length && (
            <ButtonMedium onClick={() => loadMoreSubjects(4)}>
              더보기 ({loadedCount}/{SUBJECTS.length})
            </ButtonMedium>
          )}
          {showCollapse && (
            <ButtonMedium onClick={handleCollapse}>
              접기
            </ButtonMedium>
          )}
          <ButtonMedium className="sec2_route_btn">
            학습시작
          </ButtonMedium>
        </div>
      </article>
    </section>
  );
}

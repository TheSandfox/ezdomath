import "./section2.css"
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SubjectCard } from "../../../../generic/subject/SubjectCard";
import { SUBJECTS } from "../../../../../datas/subjects";
import { userContext } from "../../../../../App";
import { ButtonMedium } from "../../../../generic/Buttons";

export function Section2() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  const [displayedSubjects, setDisplayedSubjects] = useState([]);
  const [initialSubjects, setInitialSubjects] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [showCollapse, setShowCollapse] = useState(false);

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

  const handleCardClick = (actId, subjectId) => {
    navigate(`/play/${actId}/${subjectId}`);
  };

  useEffect(() => {
    setShowCollapse(loadedCount === SUBJECTS.length && loadedCount > initialSubjects.length);
  }, [loadedCount, initialSubjects]);

  return (
    <section className="flex main_page_section main_page_sec2">
      <article className="flex main_page_sec2_inner">
        <h2>문제 리스트</h2>
        <div className="myCardContainer">
          {displayedSubjects.map(subjectId => {
            const subject = SUBJECTS.find(sub => sub.subjectId === subjectId);
            return (
              <SubjectCard
                key={subjectId}
                type={2}
                subjectId={subjectId}
                onClick={() => handleCardClick(subject.actId, subjectId)}
              />
            );
          })}
        </div>
        <div className="flex sec2_btn_wrap">
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
        </div>
      </article>
    </section>
  );
}

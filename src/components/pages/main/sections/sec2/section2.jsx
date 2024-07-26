import "./section2.css";

import React, { useState, useContext, useEffect } from "react";

import { SubjectCard } from "../../../../generic/subject/SubjectCard";
import { SUBJECTS } from "../../../../../datas/subjects";
import { userContext } from "../../../../../App";
import { ButtonMedium } from "../../../../generic/Buttons";

export function Section2() {
    const { user } = useContext(userContext);
    const [displayedSubjects, setDisplayedSubjects] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);

    // 초기 로딩 시 8개의 랜덤 서브젝트 로드
    useEffect(() => {
        loadMoreSubjects(8);
    }, []);

    const loadMoreSubjects = (count) => {
        const availableSubjects = SUBJECTS.filter(sub => !displayedSubjects.includes(sub.subjectId));
        const randomSubjects = availableSubjects.sort(() => 0.5 - Math.random()).slice(0, count);
        setDisplayedSubjects([...displayedSubjects, ...randomSubjects.map(sub => sub.subjectId)]);
        setLoadedCount(displayedSubjects.length + randomSubjects.length);
    };

    return (
        <section className="flex main_page_section main_page_sec2">
            <article className="flex main_page_sec2_inner">
                <h2>문제 리스트</h2>
                <div className="myCardContainer">
                    {displayedSubjects.map(subjectId => (
                        <SubjectCard key={subjectId} type={0} subjectId={subjectId} />
                    ))}
                </div>
                {loadedCount < SUBJECTS.length && (
                    <ButtonMedium onClick={() => loadMoreSubjects(4)}>
                        더보기 ({loadedCount}/{SUBJECTS.length})
                    </ButtonMedium>
                )}
            </article>
        </section>
    );
}

import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ACTS } from "../../../datas/acts";
import { SUBJECTS } from "../../../datas/subjects";
import "./PagePlay.css";
import { ActProgress } from "../../generic/act/ActProgress.jsx";
import { ActList } from "../../generic/act/ActList.jsx";
import Ham from '/img/HamMenu.svg';
import RightG from '/img/rightG.svg';
import Navigation from "../navigation/navigation.jsx";
import { SubjectDetail } from "../play/SubjectDetail.jsx";
import { ReportAndError } from "../../generic/play/ReportAndError.jsx";

export function PagePlay() {
  const { actId, subjectId } = useParams();
  const navigate = useNavigate();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(true);
  const [isSidebarOverlayVisible, setIsLeftSidebarOverlayVisible] = useState(false);
  const [isRightSidebarOverlayVisible, setIsRightSidebarOverlayVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedAct, setSelectedAct] = useState(actId ? parseInt(actId) : 0);
  const [selectedSubject, setSelectedSubject] = useState(subjectId ? parseInt(subjectId) : null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 좌측 사이드바 토글 함수
  const toggleSidebar = () => {
    setIsLeftSidebarOverlayVisible(!isSidebarOverlayVisible);
    if (!isSidebarOverlayVisible) {
      setIsRightSidebarOverlayVisible(false);
    }
  };

  // 우측 사이드바 토글 함수
  const toggleRightSidebar = () => {
    setIsRightSidebarOverlayVisible(!isRightSidebarOverlayVisible);
    if (!isRightSidebarOverlayVisible) {
      setIsLeftSidebarOverlayVisible(false);
    }
  };

  // act 클릭 시 처리 함수
  const handleActClick = (actId) => {
    setSelectedAct(actId);
    setSelectedSubject(null);
    navigate(`/play/${actId}`);
    setIsLeftSidebarOverlayVisible(false);
  };

  // subject 클릭 시 처리 함수
  const handleSubjectClick = (subjectId) => {
    setSelectedSubject(subjectId);
    setIsRightSidebarOverlayVisible(false);
    navigate(`/play/${selectedAct}/${subjectId}`);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // 화면 크기 조정에 따른 사이드바 및 메뉴 버튼 표시 상태 변경
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsSidebarVisible(false);
        setIsRightSidebarVisible(false);
        setIsMenuVisible(true);
      } else {
        setIsSidebarVisible(true);
        setIsRightSidebarVisible(true);
        setIsLeftSidebarOverlayVisible(false);
        setIsRightSidebarOverlayVisible(false);
        setIsMenuVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (actId) {
      setSelectedAct(parseInt(actId));
    }
    if (subjectId) {
      setSelectedSubject(parseInt(subjectId));
    }
  }, [actId, subjectId]);

  useEffect(() => {
    // 우측 사이드바 오버레이가 표시될 때 스크롤 비활성화
    if (isRightSidebarOverlayVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isRightSidebarOverlayVisible]);

  const filteredSubjects = useMemo(
    () => SUBJECTS.filter(subject => subject.actId === selectedAct), 
    [selectedAct]
  ); // useMemo를 사용하여 불필요한 재계산 방지

  return (
    <>
      <Navigation/>
      {isMenuVisible && <div className="play_page_menu_placeholder" />}
      {isMenuVisible && (
        <div className="play_page_menu flex">
          <button 
            className="sidebar_toggle_button" 
            onClick={toggleSidebar} 
            aria-label="스터디 메뉴 토글"
          >
            <img src={Ham} alt="Menu Icon" /> 스터디 메뉴
          </button>
          <button 
            className="right_sidebar_toggle_button" 
            onClick={toggleRightSidebar} 
            aria-label="문제 보기 토글"
          >
            문제 보기 <img src={RightG} alt="Right Icon" />
          </button>
        </div>
      )}
      <div className={`play_container ${!isSidebarVisible ? 'hide-left-sidebar' : ''} ${!isRightSidebarVisible ? 'hide-right-sidebar' : ''}`}>
        {isSidebarVisible && (
          <aside className="left_sidebar">
            <div className="left_sidebar_container">
              <div className="play_page_title">
                <b>학습하기</b>
              </div>
              {ACTS.map((act) => (
                <ActProgress key={act.actId} actId={act.actId} onClick={() => handleActClick(act.actId)} active={selectedAct === act.actId} />
              ))}
            </div>
          </aside>
        )}
        <section className={`play_page_background ${!isRightSidebarVisible ? 'full-width' : ''}`}>
          <div className={`content_wrap ${selectedSubject !== null ? 'no-margin-left' : ''}`}>
            <div className={`act_and_subject_wrap ${selectedSubject !== null ? 'subject-mode' : ''}`}>
              <ActList actId={selectedAct} />
              {selectedSubject !== null && (
                <div className="subject_detail_wrap">
                  <SubjectDetail subjectId={selectedSubject} />
                </div>
              )}
            </div>
            {isRightSidebarVisible && (
              <div className="subject_list_wrap">
                <div className="subject_box">
                  <p>문제 목록</p>
                  {filteredSubjects.map(subject => (
                    <div key={subject.subjectId} className="subject_item" onClick={() => handleSubjectClick(subject.subjectId)}>
                      <img src={subject.thumb} alt={subject.name} className="subject_thumb" />
                      <span>{subject.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      {isSidebarOverlayVisible && (
        <div className="sidebar_overlay">
          <aside className="left_sidebar_overlay">
            <div className="left_sidebar_container">
              <div className="play_page_title">
                <b>학습하기</b>
              </div>
              {ACTS.map((act) => (
                <ActProgress key={act.actId} actId={act.actId} onClick={() => handleActClick(act.actId)} active={selectedAct === act.actId} />
              ))}
            </div>
          </aside>
        </div>
      )}
      {isRightSidebarOverlayVisible && (
        <div className="right_sidebar_overlay">
          <div className="subject_list_wrap">
            <div className="subject_box">
              <p>문제 목록</p>
              {filteredSubjects.map(subject => (
                <div key={subject.subjectId} className="subject_item" onClick={() => handleSubjectClick(subject.subjectId)}>
                  <img src={subject.thumb} alt={subject.name} className="subject_thumb" />
                  <span>{subject.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <button onClick={handleOpenModal} className="report-button">오류 제보하기/질문하기</button>
      {isModalOpen && <ReportAndError onClose={handleCloseModal} />}
    </>
  );
}

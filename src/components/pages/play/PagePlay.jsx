import React, { useState, useEffect } from "react";
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

export function PagePlay() {
  const { actId, subjectId } = useParams();
  const navigate = useNavigate();
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isRightSidebarVisible, setRightSidebarVisible] = useState(true);
  const [isSidebarOverlayVisible, setSidebarOverlayVisible] = useState(false);
  const [isRightSidebarOverlayVisible, setRightSidebarOverlayVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [selectedAct, setSelectedAct] = useState(actId ? parseInt(actId) : 0);
  const [selectedSubject, setSelectedSubject] = useState(subjectId ? parseInt(subjectId) : null);

  const toggleSidebar = () => {
    setSidebarOverlayVisible(!isSidebarOverlayVisible);
    if (!isSidebarOverlayVisible) {
      setRightSidebarOverlayVisible(false);
    }
  };

  const toggleRightSidebar = () => {
    setRightSidebarOverlayVisible(!isRightSidebarOverlayVisible);
    if (!isRightSidebarOverlayVisible) {
      setSidebarOverlayVisible(false);
    }
  };

  const handleActClick = (actId) => {
    setSelectedAct(actId);
    setSelectedSubject(null);
    navigate(`/play/${actId}`);
    setSidebarOverlayVisible(false);
  };

  const handleSubjectClick = (subjectId) => {
    setSelectedSubject(subjectId);
    setRightSidebarOverlayVisible(false); // 문제 선택 시 오버레이를 닫음
    navigate(`/play/${selectedAct}/${subjectId}`);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setSidebarVisible(false);
        setRightSidebarVisible(false);
        setMenuVisible(true);
      } else {
        setSidebarVisible(true);
        setRightSidebarVisible(true);
        setSidebarOverlayVisible(false);
        setRightSidebarOverlayVisible(false);
        setMenuVisible(false);
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
    if (isRightSidebarOverlayVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isRightSidebarOverlayVisible]);

  const filteredSubjects = SUBJECTS.filter(subject => subject.actId === selectedAct);

  return (
    <>
      <Navigation/>
      {isMenuVisible && <div className="play_page_menu_placeholder" />}
      {isMenuVisible && (
        <div className="play_page_menu flex">
          <button className="sidebar_toggle_button" onClick={toggleSidebar}>
            <img src={Ham} alt="" /> 스터디 메뉴
          </button>
          <button className="right_sidebar_toggle_button" onClick={toggleRightSidebar}>
            문제 보기 <img src={RightG} alt="" />
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
          <div className="content_wrap">
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
    </>
  );
}

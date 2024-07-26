import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ACTS } from "../../../datas/acts.jsx";
import "./PagePlay.css";
import { ActProgress } from "../../generic/act/ActProgress.jsx";
import { ActList } from "../../generic/act/ActList.jsx";
import Ham from '/img/HamMenu.svg'
import RightG from '/img/rightG.svg'
import Navigation from "../navigation/navigation.jsx";

export function PagePlay() {
  const { actId, subjectId } = useParams();
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isRightSidebarVisible, setRightSidebarVisible] = useState(true);
  const [isSidebarOverlayVisible, setSidebarOverlayVisible] = useState(false);
  const [isRightSidebarOverlayVisible, setRightSidebarOverlayVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false); // For play_page_menu visibility

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

    handleResize(); // Run once to set initial state based on current window size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
                <ActProgress key={act.actId} actId={act.actId} />
              ))}
            </div>
          </aside>
        )}
        <section className={`play_page_background ${!isRightSidebarVisible ? 'full-width' : ''}`}>
          <div className="content_wrap">
            <div className="act_and_subject_wrap">
              <ActList actId={actId} />
            </div>
            {isRightSidebarVisible && (
              <div className="subject_list_wrap">
                <div className="subject_box">
                  <p>문제 목록</p>
                  <div className="subject_item"></div>
                  <div className="subject_item"></div>
                  <div className="subject_item"></div>
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
                <ActProgress key={act.actId} actId={act.actId} />
              ))}
            </div>
          </aside>
        </div>
      )}
      {isRightSidebarOverlayVisible && (
        <div className="right_sidebar_overlay">
          <div className="subject_list_wrap">
            <div className="subject_box">
              <p>문제목록</p>
              <div className="subject_item">123</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

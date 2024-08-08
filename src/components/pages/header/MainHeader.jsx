import React from 'react';
import './MainHeader.css'; // 이 파일에 스타일을 작성합니다.
import HeaderSVG from "/img/headerSVG.svg"
import { Link } from 'react-router-dom';

export function MainHeader (){
    return (
        <header className="main-header">
            <div className="header-content">
                <div className="left">
                    <p className='font_title animated-text'>EZDOMATH에 방문해주셔서 감사합니다.</p>
                    <div className='main_svg_animation'>
                        <img src={HeaderSVG} alt="headerSVGAnimation" />
                    </div>
                </div>
                <div className="right">
                    <p className='mega_bold'>홈페이지 이용을 위해
                    <br />
                    가이드를 꼭 읽어주세요!</p>
                    <Link to="/intro">
                        <button className='main_top_btn'>소개 페이지로 이동</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
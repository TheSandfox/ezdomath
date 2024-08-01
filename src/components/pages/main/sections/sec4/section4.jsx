import "./section4.css";
import React, { useState, useEffect } from "react";
import { ButtonMedium } from "../../../../generic/Buttons";

export function Section4() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [opcityIndex, setOpcityIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
    setOpcityIndex(index === opcityIndex ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth === 800){}
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sec4_cont = [
    {
      title: "학습 및 문제풀이",
      descriptions: [
        "‘EZDOMATH’ 에서 제공하는 3D 모델을 이용한 도형 학습 기능은 회원가입 유/무에 상관없이 자유롭게 이용 가능합니다.",
        "‘교육 소개’ 페이지에서 학습 목표와 개념 설명을 포함한 다양한 문제를 학습하고 풀어보세요!",
      ],
      imgSrc: "/ezdomath/img/Plus_Math.webp",
      imgCardSrc: "/ezdomath/img/intro_list_item1.png"
    },
    {
      title: "로그인 및 회원가입",
      descriptions: [
        "‘EZDOMATH’ 에서 제공하는 학생 및 선생님을 대상으로 하는 학습 관리 시스템은 회원만 이용 가능합니다.",
        "회원의 경우 ‘일반회원’ 과 ‘카카오 회원’ 으로 분류되며 카카오 회원의 경우 추가 정보를 입력해야 정상적인 서비스 이용이 가능합니다.",
      ],
      imgSrc: "/ezdomath/img/Plus_Math.webp",
      imgCardSrc: "/ezdomath/img/intro_list_item2.png"
    },
    {
      title: "회원을 위한 특별 기능",
      descriptions: [
        "회원들에겐 공통적으로 마이페이지에서 내 정보 열람 및 진척도 확인이 가능합니다.",
        "또한 '학생', '교사', '학부모' 회원 유형에 따라 맞춤형 학습관리 기능을 제공하고 있습니다.",
      ],
      imgSrc: "/ezdomath/img/Plus_Math.webp",
      imgCardSrc: "/ezdomath/img/intro_list_item3.png"
    },
    {
      title: "문의사항 처리방법",
      descriptions: [
        "페이지 곳곳에 있는 '문의사항' 버튼을 누르시면 페이지 이용간 불편한 점 또는 개선할 부분을 작성하여 사이트 관리자에게 보낼 수 있습니다.",
        "또한 자주 언급되거나 중요한 문의사항에 경우 공지사항 페이지에서 해당 문의에 대한 피드백 및 문제 해결 방안에 대해 답변드리고 있습니다.",
      ],
      imgSrc: "/ezdomath/img/Plus_Math.webp",
      imgCardSrc: "/ezdomath/img/intro_list_item4.png"
    },
  ];

  function Sec4ContImgCard({
    features,
    opcityIndex
  }) {
    return (
      <div className="flex intro_page_img_card_wrap">
        <div className="intro_page_img_card_inner">
          {features.map((feature, index) => (
            <div key={index} className={`intro_page_img_card ${opcityIndex === index ? '' : 'opacity'}`}>
              <img className="img_card" src={feature.imgCardSrc}/>
            </div>
          ))}
        </div>
      </div>
    );
  };

  function Sec4ContComponent({
    features,
    toggleExpand,
    expandedIndex,
  }) {
    return (
      <div className="flex intro_page_feature_btn_inner">
        {features.map((feature, index) => (
          <div key={index} className="flex intro_page_feature_btn">
            <ButtonMedium
              className={`flex intro_page_feature_btn_trigger ${expandedIndex === index ? 'expanded' : ''}`}
              onClick={() => toggleExpand(index)}
            >
              <p>
                <span>{feature.title}</span>
              </p>
              <img id="sec4_plus" src={feature.imgSrc} />
            </ButtonMedium>
            <div
              className={`flex intro_page_feature_btn_finger ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <div className="flex intro_page_content_description">
                {feature.descriptions.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>
              <div className="mobile_view">
                <Sec4ContImgCard features={sec4_cont} opcityIndex={opcityIndex}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="flex main_page_section main_page_sec4">
      <article className="flex main_page_sec4_inner">
        <div className="flex sec4_inner_top">
          <div>
            <span className="font_main">사이트 이용 가이드</span>
          </div>
          <div>
            <span className="font_small">
              소개 페이지에서 더 자세한 내용을 확인해보세요!
            </span>
          </div>
        </div>
        <div className="flex sec4_cont_wrap">
          <aside className="flex intro_page_feature_btn_wrap">
            <Sec4ContComponent
              features={sec4_cont}
              toggleExpand={toggleExpand}
              expandedIndex={expandedIndex}
            />
            <div className="intro_page_route_feature_btn">
              <div>
                <div
                  id="routing_btn"
                  className="flex intro_page_content_description"
                >
                  <ButtonMedium to={'intro'}>
                    <div className="flex routing_btn">
                      <p>VIEW MORE</p>
                      <img id="sec4_plus" src="/ezdomath/img/Plus_Math.webp"></img>
                    </div>
                  </ButtonMedium>
                </div>
              </div>
            </div>
          </aside>
          <Sec4ContImgCard features={sec4_cont} opcityIndex={opcityIndex}/>
        </div>
      </article>
    </section>
  );
}

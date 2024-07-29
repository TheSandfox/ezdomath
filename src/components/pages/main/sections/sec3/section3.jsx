import "./section3.css";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Section3() {
  const circle_cont = useRef([]);
  const circle_deco_cont = useRef([]);


  useEffect(() => {
    gsap.utils.toArray(circle_cont.current).forEach((element, index) => {
      gsap.fromTo(
        element,
        { y: -50 },
        {
          y: 50,
          scrollTrigger: {
            trigger: element,
            start: "top 10%", // 시작 위치
            end: "bottom 90%", // 끝나는 위치
            scrub: 2, // 숫자가 커질수록 스크롤되는 것보다 애니메이션에 딜레이를 줌
            duration: 2, // 시간차
            stagger: 0.4, // 시차 간격 설정
          },
        }
      );
    });

    gsap.utils.toArray(circle_deco_cont.current).forEach((element, index) => {
      gsap.fromTo(
        element,
        { y: 50 },
        {
          y: -50,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            duration: 0.6,
            stagger: 0.2,
          },
        }
      );
    });
  }, []);

  const sec3_cont = [
    {
      decoSrc: "img/sec3_deco1.svg",
      imgSrc: "img/3D_Object.webp",
      title: "3D 모델을 통한 예제",
      description: "Three.js를 통해 구현한 3D 모델을 통해 도형을 조작하여 수학에 대한 이해를 높이세요!",
    },
    {
      decoSrc: "img/sec3_deco1.svg",
      imgSrc: "img/Reading.webp",
      title: "오답관리",
      description: "틀린 문제는‘오답노트에 기록’을 통해 ‘마이페이지’에서 자신만의 오답노트를 제작해보세요.",
    },
    {
      decoSrc: "img/sec3_deco1.svg",
      imgSrc: "img/Show Property.webp",
      title: "직관적인 학습관리",
      description: "자녀 및 학생 등록을 통해 현재 진도를 직관적으로 확인 가능합니다.",
    },
    {
      decoSrc: "img/sec3_deco1.svg",
      imgSrc: "img/Teacher.webp",
      title: "피드백",
      description: "학생이 모르는 문제는 등록한 선생님을 통해 빠른 피드백을 받아볼 수 있습니다.",
    },
  ];

  

  return (
    <section className="flex main_page_section main_page_sec3">
      <article className="flex main_page_sec3_inner">
        <div className="background_"></div>
        <div className="flex sec3_act_cont_wrap">
          <table className="flex">
            <thead>
              <tr className="flex">
                <th className="sec3_tit_main">이런 서비스를 제공합니다</th>
                <th className="sec3_tit_sub">“사이트에서 제공하는 기능을 활용해보세요!”</th>
              </tr>
            </thead>
            <tbody className="flex sec3_act_cont_wrap">
              {sec3_cont.map((item, index) => (
                <tr
                  key={index}
                  className={`flex sec3_act${index + 1} sec3_act`}
                  ref={(el) => (circle_cont.current[index] = el)}
                >
                  <td className="sec3_cont_deco">
                    <img
                      id='horizontal'
                      src={item.decoSrc}
                      ref={(el) => (circle_deco_cont.current[index] = el)}
                    />
                  </td>
                  <td className="flex sec3_act_cont">
                    <div className="sec3_act_cont_img">
                      <img src={item.imgSrc} alt="" />
                    </div>
                    <div className="flex sec3_act_cont_txt_wrap">
                      <p className="sec3_font_main">{item.title}</p>
                      <p className="sec3_font_sub">{item.description}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div></div>
      </article>
    </section>
  );
}

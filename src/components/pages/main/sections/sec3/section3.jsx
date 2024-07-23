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
        { y: 50 },
        {
          y: -50,
          scrollTrigger: {
            trigger: element,
            start: "top 10%", // 시작 위치
            end: "bottom 90%", // 끝나는 위치
            scrub: true, // 스크롤에 따라 애니메이션이 연속적으로 움직이도록 설정
            markers: true,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.2,
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
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="flex main_page_section main_page_sec3">
      <article className="flex main_page_sec3_inner">
        <div className="background_"></div>
        <div className="sec3_act_cont_wrap">
          <table className="flex">
            <thead>
              <tr className="flex">
                <th className="sec3_tit_main">이런 서비스를 제공합니다</th>
                <th className="sec3_tit_sub">“사이트에서 제공하는 기능을 활용해보세요!”</th>
              </tr>
            </thead>
            <tbody className="flex sec3_act_cont_wrap">
              <tr className="flex sec3_act1 sec3_act" ref={(el) => (circle_cont.current[0] = el)}>
                <td className="sec3_cont_deco">
                  <img id="horizontal" src="img/sec3_deco1.svg" ref={(el) => (circle_deco_cont.current[0] = el)} />
                </td>
                <td className="flex sec3_act_cont">
                  <div className="sec3_act_cont_img">
                    <img src="img/3D_Object.webp" alt="" />
                  </div>
                  <div className="flex sec3_act_cont_txt_wrap">
                    <p className="sec3_font_main">3D 모델을 통한 예제</p>
                    <p className="sec3_font_sub">
                      Three.js를 통해 구현한 3D 모델을 통해 도형을 조작하여
                      수학에 대한 이해를 높이세요!
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="flex sec3_act2 sec3_act" ref={(el) => (circle_cont.current[1] = el)}>
                <td className="sec3_cont_deco">
                  <img id="not_hotizontal" src="img/sec3_deco1.svg" ref={(el) => (circle_deco_cont.current[1] = el)} />
                </td>
                <td className="flex sec3_act_cont">
                  <div className="sec3_act_cont_img">
                    <img src="img/Reading.webp" alt="" />
                  </div>
                  <div className="flex sec3_act_cont_txt_wrap">
                    <p className="sec3_font_main">오답관리</p>
                    <p className="sec3_font_sub">
                      틀린 문제는‘오답노트에 기록’을 통해 ‘마이페이지’에서
                      자신만의 오답노트를 제작해보세요.
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="flex sec3_act3 sec3_act" ref={(el) => (circle_cont.current[2] = el)}>
                <td className="sec3_cont_deco">
                  <img id="horizontal" src="img/sec3_deco1.svg" ref={(el) => (circle_deco_cont.current[2] = el)} />
                </td>
                <td className="flex sec3_act_cont">
                  <div className="sec3_act_cont_img">
                    <img src="img/Show Property.webp" alt="" />
                  </div>
                  <div className="flex sec3_act_cont_txt_wrap">
                    <p className="sec3_font_main">직관적인 학습관리</p>
                    <p className="sec3_font_sub">
                      자녀 및 학생 등록을 통해 현재 진도를 직관적으로 확인
                      가능합니다.
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="flex sec3_act4 sec3_act" ref={(el) => (circle_cont.current[3] = el)}>
                <td className="sec3_cont_deco">
                  <img id="not_hotizontal" src="img/sec3_deco1.svg" ref={(el) => (circle_deco_cont.current[3] = el)} />
                </td>
                <td className="flex sec3_act_cont">
                  <div className="sec3_act_cont_img">
                    <img src="img/Teacher.webp" alt="" />
                  </div>
                  <div className="flex sec3_act_cont_txt_wrap">
                    <p className="sec3_font_main">피드백</p>
                    <p className="sec3_font_sub">
                      학생이 모르는 문제는 등록한 선생님을 통해 빠른 피드백을
                      받아볼 수 있습니다.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div></div>
      </article>
    </section>
  );
}

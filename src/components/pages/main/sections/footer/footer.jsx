import "./footer.css";
import React, { useRef, useEffect } from "react";
import { ButtonLarge } from "../../../../generic/Buttons";
import gsap from "gsap";

export const Footer = () => {
  const scrollTopBtnWrapRef = useRef(null);
  const scrollTopBtnFillRef = useRef(null);
  const scrollTopBtnTxtRef = useRef(null);

  useEffect(() => {
    const wrap = scrollTopBtnWrapRef.current;
    const fill = scrollTopBtnFillRef.current;
    const txt = scrollTopBtnTxtRef.current;

    // 마우스 움직임에 따라 텍스트 움직이기
    const handleMouseMove = (event) => {
      const { offsetX, offsetY } = event;
      const centerX = wrap.offsetWidth / 2;
      const centerY = wrap.offsetHeight / 2;
      const moveX = (offsetX - centerX) / 5;
      const moveY = (offsetY - centerY) / 5;

      gsap.to(fill, { y: "0%", duration: 0.3, ease: "power1.out" });
      gsap.to([txt, wrap], {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(fill, {
        y: "-100%",
        duration: 0.3,
        ease: "power1.in",
        onComplete: () => gsap.set(fill, { y: "100%" }),
      });
      gsap.to([txt, wrap], { x: 0, y: 0, duration: 0.3 });
    };

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    wrap.addEventListener("mousemove", handleMouseMove);
    wrap.addEventListener("mouseleave", handleMouseLeave);
    wrap.addEventListener("click", handleScrollToTop);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거 및 초기 위치로 복구
    return () => {
      wrap.removeEventListener("mousemove", handleMouseMove);
      wrap.removeEventListener("mouseleave", handleMouseLeave);
      wrap.removeEventListener("click", handleScrollToTop);
      gsap.set([txt, wrap], { x: 0, y: 0 });
      gsap.set(fill, { y: "100%" });
    };
  }, []);

  return (
    <footer>
      <div className="flex foot_inner">
        <div className="flex foot_cont_wrap">
          <div className="foot_cont_txt">
            <div className="flex main_font_wrap">
              <div className="main_font">EZDOMATH</div>
            </div>
          </div>
          <div className="foot_cont_main">
            <div className="flex foot_cont_main_inner">
              <div className="stripe">
                <div className="scrollTop_btn_wrap" ref={scrollTopBtnWrapRef}>
                  <div
                    className="scrollTop_btn_fill"
                    ref={scrollTopBtnFillRef}
                  ></div>
                  <ButtonLarge className="flex scrollTop_btn">
                    <p
                      className="flex scrollTop_btn_txt"
                      ref={scrollTopBtnTxtRef}
                    >
                      <span>SCROLL</span>
                      <span>TO</span>
                      <span>TOP</span>
                    </p>
                  </ButtonLarge>
                </div>
              </div>
            </div>
          </div>
          <div className="flex foot_cont_btn">
            <ButtonLarge
              className="foot_btn foot_btn_Link"
              to="https://github.com/TheSandfox/ezdomath"
            >
              https://github.com/TheSandfox/ezdomath
            </ButtonLarge>
            <ButtonLarge className="foot_btn foot_btn_inquiry">
              문의사항
            </ButtonLarge>
          </div>
        </div>
        <div className="flex foot_under_txt">
          <div className="copyright">
            COPYRIGHT 2024 EZDOMATH ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
};

import './section1.css'
import { ButtonLarge } from "../../../../generic/Buttons";

export function Section1() {
  return (
    <section className='section sec1'>
      <article className='flex sec1_inner'>
        <div>
          <h2 className="sec1_font_main">도형 학습의 재미를 느껴보세요!</h2>
          <p className="sec1_font_sub">
            시시한 문제풀이는 전면 금지한다! 도형과 친해야 수학을 잘할 수 있단다
            꼬마야
          </p>
        </div>
        <div>
          <ul className="flex act_cont_wrap">
            <li className="act_cont">
              <div className='act_cont_img'>
                <img src="ezdomath/public/img/Sphere_50.webp"></img>
              </div>
              <div className='act_cont_txt_wrap'>
                <p className="sec1_font_main">다각형의 성질</p>
                <p className="sec1_font_sub">
                  삼각형, 사각형 등 다양한 다각형의 내각과 외각의 성질을 배워요.
                </p>
              </div>
            </li>
            <li className="act_cont">
              <div className='act_cont_img'>
                <img src="ezdomath/public/img/Reflection_50.webp"></img>
              </div>
              <div className='act_cont_txt_wrap'>
                <p className="sec1_font_main">합동과 대칭</p>
                <p className="sec1_font_sub">도형의 합동 조건과 대칭축을 이해하고 활용할 수 있어요.</p>
              </div>
            </li>
            <li className="act_cont">
              <div className='act_cont_img'>
                <img src="ezdomath/public/img/Front View_50.webp"></img>
              </div>
              <div className='act_cont_txt_wrap'>
                <p className="sec1_font_main">직육면체</p>
                <p className="sec1_font_sub">직육면체의 표면적과 부피를 계산하는 방법을 학습해요.</p>
              </div>
            </li>
            <li className="act_cont">
              <div className='act_cont_img'>
                <img src="ezdomath/public/img/Query Outer Join Left_50.webp"></img>
              </div>
              <div className='act_cont_txt_wrap'>
                <p className="sec1_font_main">원의 성질</p>
                <p className="sec1_font_sub">원주율과 원의 둘레, 넓이를 구하는 방법을 배워요.</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <p className="sec1_font_sub">
            이외에도 다양한 단원에 대한 설명과 예제를 확인하고 재미있는 학습과
            함께 수학적 사고력을 키워보세요!
          </p>
          <ButtonLarge className='sec1_play_btn'>학습시작</ButtonLarge>
        </div>
      </article>
    </section>
  );
}
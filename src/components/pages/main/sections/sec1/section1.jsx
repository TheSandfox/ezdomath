import './section1.css';
import { ButtonLarge } from "../../../../generic/Buttons";

export function Section1() {
  // 학습 내용 데이터 배열
  const sec1_cont = [
    {
      imgSrc: "img/Sphere.webp",
      title: "다각형의 성질",
      description: "삼각형, 사각형 등 다양한 다각형의 내각과 외각의 성질을 배워요."
    },
    {
      imgSrc: "img/Reflection.webp",
      title: "합동과 대칭",
      description: "도형의 합동 조건과 대칭축을 이해하고 활용할 수 있어요."
    },
    {
      imgSrc: "img/Front View.webp",
      title: "직육면체",
      description: "직육면체의 표면적과 부피를 계산하는 방법을 학습해요."
    },
    {
      imgSrc: "img/Query Outer Join Left.webp",
      title: "원의 성질",
      description: "원주율과 원의 둘레, 넓이를 구하는 방법을 배워요."
    }
  ];

  return (
    <section className='flex main_page_section main_page_sec1'>
      <article className='flex main_page_sec1_inner'>
        <div className='sec1_top_wrap'>
          <h2 className="sec1_font_main">도형 학습의 재미를 느껴보세요!</h2>
          <p className="sec1_font_sub">
            시시한 문제풀이는 전면 금지한다! 도형과 친해야 수학을 잘할 수 있단다 꼬마야
          </p>
        </div>
        <div className='sec1_middle_wrap'>
          <ul className="flex act_cont_wrap">
            {sec1_cont.map((item, index) => (
              <li key={index} className="flex act_cont">
                <div className='flex act_cont_img'>
                  <img src={item.imgSrc} alt={item.title}></img>
                </div>
                <div className='act_cont_txt_wrap'>
                  <p className="sec1_font_main">{item.title}</p>
                  <p className="sec1_font_sub">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex sec1_bot_wrap'>
          <p className="sec1_font_sub sec1_bot_txt">
            이외에도 다양한 단원에 대한 설명과 예제를 확인하고 재미있는 학습과 함께 수학적 사고력을 키워보세요!
          </p>
          <ButtonLarge className='sec1_play_btn'>학습시작</ButtonLarge>
        </div>
      </article>
    </section>
  );
}

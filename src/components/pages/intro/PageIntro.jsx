// import { ReactSVG } from 'react-svg';
import './PageIntro.css';
import SAnimation from './SAnimation.svg'
import DiscoverWave from '/img/discoverWave.webp'

export function PageIntro() {
  return (
    <div className="page-intro">
      <div className="intro_top_banner">
        <h1>헤더이미지</h1>
      </div>
      <div className="intro_content_inner">
        <section className="intro_message flex">
          <div>
            <b className='intro_Headline_b'>
              EZDOMATH 사이트를
              <br />
              방문해 주셔서 감사합니다.
              <br />
              도형을 통해 3D로 수학 문제를
              <br />
              쉽고 재미있게 풀어보세요!
            </b>
            <p className='intro_small_p'>
              회원가입을 하시면 부모님과 선생님을 통해 진행도를 확인할 수 있습니다.
              <br />
              문제를 구독하고, 나만의 노트를 만드세요!
            </p>
            <div className="intro_buttons">
              <button>수업내용 보러 가기</button>
              <button>문제풀이 하러 가기</button>
            </div>
          </div>
          <aside className='svg_animation_wrap'>
            <div className='svg_animation'>
              <img src={SAnimation} alt="intro_animation" />
            </div>
          </aside>
        </section>
      </div>
      <img src={DiscoverWave} alt="" />
      <section className=''>

      </section>
    </div>
  );
}

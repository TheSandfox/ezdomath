import './PageIntro.css';
import SAnimation from '/img/SAnimation.svg'
import DiscoverWave from '/img/discoverWave.webp'
import SpotlightWave from '/img/spotlightWave.webp'

export function PageIntro() {
  return (
    <div className="page-intro">
      <div className="intro_top_banner">
        <h1>헤더이미지</h1>
      </div>
      <div className='intro_100_white'>
      <div className="intro_content_inner">
        <section className="intro_message flex">
          <div className='intro_mobie_flex'>
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
      <img src={DiscoverWave} alt="discorverwave" className='discorver_wave' />
      </div>
      <div className='intro_two_wrap'>
        <section className='intro_two_content'>
          <div className='intro_two_center_wrap'>
            <p className='intro_two_headline'>
              직관적인 학습과 협력으로 성장할 수 있는
              <br />
              EZDOMATH!
              </p>
              <div className='intro_two_item_wrap flex'>
                <div className='intro_box'>
                  <div className='intro_item1'></div>
                  <p className='intro_basic_font'>
                    3D 도형을 활용하여 복잡한 수학 개념을
                  <br />
                    실제 경험과 연결해 학습할 수 있습니다.
                  </p>
                </div>
                <div className='intro_box'>
                  <div className='intro_item2'></div>
                  <p className='intro_basic_font'>
                    나의 진도율과 문제를 북마크 하여
                    <br />
                    나만의 문제집을 만들 수 있습니다.
                  </p>
                </div>
                <div className='intro_box'>
                  <div className='intro_item3'></div>
                  <p className='intro_basic_font'>
                    부모님과 선생님의 협력으로
                    <br />
                    학습 역량을 높일 수 있습니다.
                  </p>
                </div>
              </div>
              <div className='intro_two_colorbox'>
                <div className='intro_two_colorbox_inner'>
                  <p className='colorbox_little_font'>문제 북마크 + 진도율 + 커뮤니티 기능</p>
                  <p className='colorbox_big_font'>마이 페이지에서 확인 할 수 있습니다.</p>
                  <p className='intro_small_p'>무료 회원가입으로 모든 기능을 이용하세요!</p>
                  <div className='intro_two_button'>
                    <button>마이페이지</button>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </div>
      <div className='intro_100_white'>
        <img src={SpotlightWave} alt="SpotlightWave" className='Spotlight_wave' />
        <div className='intro_list_top'>
          <b className='intro_list_top_p'>모든 학습 목표를 달성할 수 있는 솔루션을 만나보세요!</b>
        </div>
        <section className='intro_list_wrap'>
            <div className='intro_list_box'>
              <div className='intro_list_box_left'>
                <div className='intro_list_box_top'>
                  <p className='intro_list_box_small_p'>부모님과 선생님이 함께하는 진도확인</p>
                  <p className='intro_list_box_title_p'>커뮤니티 기능</p>
                  <p className='intro_list_box_detail_p'>
                    자녀의 학습진도를 확인하고 피드백하며,
                    <br />
                    부족한 부분을 모니터링하여
                    <br />
                    학습 목표 달성을 도와줍니다.
                  </p>
                </div>
                <div className='intro_list_box_bottop'>
                  <p className='intro_list_box_link'>
                    커뮤니티 페이지로 이동하기
                  </p>
                </div>
              </div>
              <aside className='intro_list_imagebox'>
                <div className='intro_list_item1'></div>
              </aside>
            </div>
            <div className='intro_list_box_revers'>
              <div className='intro_list_box_left'>
                <div className='intro_list_box_top'>
                  <p className='intro_list_box_small_p'>묻고 답해볼까요?</p>
                  <p className='intro_list_box_title_p'>QnA 피드백 기능</p>
                  <p className='intro_list_box_detail_p'>
                    어려운 문제를 혼자 해결하기 어렵다면
                    <br />
                    선생님께 도움을 받을 수 있어요!
                    <br />
                    <br />
                    문제를 푸는 도중이나 구독한 문제에서
                    <br />
                    어려운 문제가 있다면 질문하기를 눌러보세요!
                  </p>
                </div>
                <div className='intro_list_box_bottop'>
                  <p className='intro_list_box_link'>
                  QnA 페이지로 이동하기
                  </p>
                </div>
              </div>
              <aside className='intro_list_imagebox'>
                <div className='intro_list_item2'></div>
              </aside>
            </div>
            <div className='intro_list_box'>
              <div className='intro_list_box_left'>
                <div className='intro_list_box_top'>
                  <p className='intro_list_box_small_p'>진행 진도를 확인하고 싶다면</p>
                  <p className='intro_list_box_title_p'>진척도 확인하기</p>
                  <p className='intro_list_box_detail_p'>
                  진척도를 알고싶으신가요? 마이페이지에서
                  <br />
                  얼마나 했는지 알 수 있습니다.
                  <br />
                  해결하지 못한 부분이 있는지도 확인해보세요!
                  </p>
                </div>
                <div className='intro_list_box_bottop'>
                  <p className='intro_list_box_link'>
                    진척도 확인 페이지로 이동하기
                  </p>
                </div>
              </div>
              <aside className='intro_list_imagebox'>
                <div className='intro_list_item3'></div>
              </aside>
            </div>
            <div className='intro_list_box_revers'>
              <div className='intro_list_box_left'>
                <div className='intro_list_box_top'>
                  <p className='intro_list_box_small_p'>나만의 문제 노트 만들기!</p>
                  <p className='intro_list_box_title_p'>북마크 기능</p>
                  <p className='intro_list_box_detail_p'>
                  문제가 유용하거나 조금 더 공부해야겠다면
                  <br />
                  별 표시를 눌러서 마이페이지에 보관할 수 있어요.
                  <br />
                  북마크를 해두면 선생님께 질문할 수도 있어요.
                  </p>
                </div>
                <div className='intro_list_box_bottop'>
                  <p className='intro_list_box_link'>
                  북마크 페이지로 이동하기
                  </p>
                </div>
              </div>
              <aside className='intro_list_imagebox'>
                <div className='intro_list_item4'></div>
              </aside>
            </div>
        </section>
      </div>
    </div>
  );
}

import "./section4.css";
import { ButtonMedium } from "../../../../generic/Buttons";

export function Section4() {
  return (
    <section className="flex main_page_section main_page_sec4">
      <article className="flex main_page_sec4_inner">
          <div className="flex sec4_inner_top">
            <div>
              <span>사이트 이용 가이드</span>
            </div>
            <div>
              <span>소개 페이지에서 더 자세한 내용을 확인해보세요!</span>
            </div>
          </div>
          <div className="flex sec4_cont_wrap">
            <aside className="flex intro_page_feature_btn_wrap">
              <div className="flex intro_page_feature_btn">
                <div className="flex intro_page_feature_btn_trigger">
                  <p>
                    <span>학습 및 문제풀이</span>
                  </p>
                  <img id="sec4_plus" src="img/Plus_Math.webp" />
                </div>
                <div>
                  <div className="flex intro_page_content_description">
                    <p>
                      {" "}
                      ‘EZDOMATH’ 에서 제공하는 3D 모델을 이용한 도형 학습 기능은
                      회원가입 유/무에 상관없이 자유롭게 이용 가능합니다.
                    </p>
                    <p>
                      {" "}
                      ‘교육 소개’ 페이지에서 학습 목표와 개념 설명을포함한
                      다양한 문제를 학습하고 풀어보세요!
                    </p>
                  </div>
                  <div className="mobile_view">
                    <img />
                  </div>
                </div>
              </div>
              <div className="flex intro_page_feature_btn">
                <div className="flex intro_page_feature_btn_trigger">
                  <p>
                    <span>로그인 및 회원가입</span>
                  </p>
                  <img id="sec4_plus" src="img/Plus_Math.webp" />
                </div>
                <div>
                  <div className="flex intro_page_content_description">
                    <p>
                      ‘EZDOMATH’ 에서 제공하는 학생 및 선생님을 대상으로 하는
                      학습 관리 시스템은 회원만 이용 가능합니다.
                    </p>
                    <p>
                      회원의 경우 ‘일반회원’ 과 ‘카카오 회원’ 으로 분류되며
                      카카오 회원의 경우 추가 정보를 입력해야 정상적인 서비스
                      이용이 가능합니다.{" "}
                    </p>
                  </div>
                  <div className="mobile_view">
                    <img />
                  </div>
                </div>
              </div>
              <div className="flex intro_page_feature_btn">
                <div className="flex intro_page_feature_btn_trigger">
                  <p>
                    <span>회원을 위한 특별 기능</span>
                  </p>
                  <img id="sec4_plus" src="img/Plus_Math.webp" />
                </div>
                <div>
                  <div className="flex intro_page_content_description">
                    <p>
                      회원들에겐 공통적으로 마이페이지에서 내 정보 열람 및
                      진척도 확인이 가능합니다.
                    </p>
                    <p>
                      또한 '학생', '교사', '학부모' 회원 유형에 따라 맞춤형
                      학습관리 기능을 제공하고 있습니다.
                    </p>
                  </div>
                  <div className="mobile_view">
                    <img />
                  </div>
                </div>
              </div>
              <div className="flex intro_page_feature_btn">
                <div className="flex intro_page_feature_btn_trigger">
                  <p>
                    <span>문의사항 처리방법</span>
                  </p>
                  <img id="sec4_plus" src="img/Plus_Math.webp" />
                </div>
                <div>
                  <div className="flex intro_page_content_description">
                    <p>
                      페이지 곳곳에 있는 '문의사항' 버튼을 누르시면 페이지
                      이용간 불편한 점 또는 개선할 부분을 작성하여 사이트
                      관리자에게 보낼 수 있습니다.
                    </p>
                    <p>
                      또한 자주 언급되거나 중요한 문의사항에 경우 공지사항
                      페이지에서 해당 문의에 대한 피드백 및 문제 해결 방안에
                      대해 답변드리고 있습니다.
                    </p>
                  </div>
                  <div className="mobile_view">
                    <img />
                  </div>
                </div>
              </div>
              <div className="intro_page_feature_btn">
                <div>
                  <div id="routing_btn" className="intro_page_content_description">
                    <ButtonMedium>
                      <div className="flex">
                        <p>VIEW MORE</p>
                        <img id="sec4_plus" src="img/Plus_Math.webp"></img>
                      </div>
                    </ButtonMedium>
                  </div>
                </div>
              </div>
            </aside>
            <div className="intro_page_img_card_wrap">
              <div className="flex intro_page_img_card_inner">
                <div className="intro_page_img_card"></div>
                <div className="intro_page_img_card"></div>
                <div className="intro_page_img_card"></div>
                <div className="intro_page_img_card"></div>
                <div className="intro_page_img_card"></div>
              </div>
            </div>
          </div>
      </article>
    </section>
  );
}

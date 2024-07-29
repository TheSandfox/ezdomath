const naviMyPageAccordionContent = [
  { text: "내정보", imgSrc: "img/Arrow_darkest.webp" },
  { text: "커뮤니티", imgSrc: "img/Arrow_darkest.webp" },
  { text: "진척도", imgSrc: "img/Arrow_darkest.webp" },
  { text: "QnA", imgSrc: "img/Arrow_darkest.webp" },
  { text: "북마크", imgSrc: "img/Arrow_darkest.webp" },
];

const naviMenuPageAccordionContent = [
  { text: "EZDOMATH", imgSrc: "img/Arrow_darkest.webp", to: "/" },
  { text: "공지사항", imgSrc: "img/Arrow_darkest.webp", to: "/" },
  { text: "학습시작", imgSrc: "img/Arrow_darkest.webp", to: "/" },
];

const sec1_cont = [
  {
    imgSrc: "img/Sphere.webp",
    title: "다각형의 성질",
    description:
      "삼각형, 사각형 등 다양한 다각형의 내각과 외각의 성질을 배워요.",
  },
  {
    imgSrc: "img/Reflection.webp",
    title: "합동과 대칭",
    description: "도형의 합동 조건과 대칭축을 이해하고 활용할 수 있어요.",
  },
  {
    imgSrc: "img/Front View.webp",
    title: "직육면체",
    description: "직육면체의 표면적과 부피를 계산하는 방법을 학습해요.",
  },
  {
    imgSrc: "img/Query Outer Join Left.webp",
    title: "원의 성질",
    description: "원주율과 원의 둘레, 넓이를 구하는 방법을 배워요.",
  },
];

const sec3_cont = [
  {
    decoSrc: "img/sec3_deco1.svg",
    imgSrc: "img/3D_Object.webp",
    title: "3D 모델을 통한 예제",
    description:
      "Three.js를 통해 구현한 3D 모델을 통해 도형을 조작하여 수학에 대한 이해를 높이세요!",
  },
  {
    decoSrc: "img/sec3_deco1.svg",
    imgSrc: "img/Reading.webp",
    title: "오답관리",
    description:
      "틀린 문제는‘오답노트에 기록’을 통해 ‘마이페이지’에서 자신만의 오답노트를 제작해보세요.",
  },
  {
    decoSrc: "img/sec3_deco1.svg",
    imgSrc: "img/Show Property.webp",
    title: "직관적인 학습관리",
    description:
      "자녀 및 학생 등록을 통해 현재 진도를 직관적으로 확인 가능합니다.",
  },
  {
    decoSrc: "img/sec3_deco1.svg",
    imgSrc: "img/Teacher.webp",
    title: "피드백",
    description:
      "학생이 모르는 문제는 등록한 선생님을 통해 빠른 피드백을 받아볼 수 있습니다.",
  },
];

const sec4_cont = [
  {
    title: "학습 및 문제풀이",
    descriptions: [
      "‘EZDOMATH’ 에서 제공하는 3D 모델을 이용한 도형 학습 기능은 회원가입 유/무에 상관없이 자유롭게 이용 가능합니다.",
      "‘교육 소개’ 페이지에서 학습 목표와 개념 설명을 포함한 다양한 문제를 학습하고 풀어보세요!",
    ],
    imgSrc: "img/Plus_Math.webp",
    imgCardSrc: "img/intro_list_item1.png",
  },
  {
    title: "로그인 및 회원가입",
    descriptions: [
      "‘EZDOMATH’ 에서 제공하는 학생 및 선생님을 대상으로 하는 학습 관리 시스템은 회원만 이용 가능합니다.",
      "회원의 경우 ‘일반회원’ 과 ‘카카오 회원’ 으로 분류되며 카카오 회원의 경우 추가 정보를 입력해야 정상적인 서비스 이용이 가능합니다.",
    ],
    imgSrc: "img/Plus_Math.webp",
    imgCardSrc: "img/intro_list_item2.png",
  },
  {
    title: "회원을 위한 특별 기능",
    descriptions: [
      "회원들에겐 공통적으로 마이페이지에서 내 정보 열람 및 진척도 확인이 가능합니다.",
      "또한 '학생', '교사', '학부모' 회원 유형에 따라 맞춤형 학습관리 기능을 제공하고 있습니다.",
    ],
    imgSrc: "img/Plus_Math.webp",
    imgCardSrc: "img/intro_list_item3.png",
  },
  {
    title: "문의사항 처리방법",
    descriptions: [
      "페이지 곳곳에 있는 '문의사항' 버튼을 누르시면 페이지 이용간 불편한 점 또는 개선할 부분을 작성하여 사이트 관리자에게 보낼 수 있습니다.",
      "또한 자주 언급되거나 중요한 문의사항에 경우 공지사항 페이지에서 해당 문의에 대한 피드백 및 문제 해결 방안에 대해 답변드리고 있습니다.",
    ],
    imgSrc: "img/Plus_Math.webp",
    imgCardSrc: "img/intro_list_item4.png",
  },
];

export default {naviMyPageAccordionContent, naviMenuPageAccordionContent, sec1_cont, sec3_cont, sec4_cont };

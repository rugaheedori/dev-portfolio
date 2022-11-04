/* This is imported components of dev-portfolio library */
import {
  Carousel,
  Contact,
  Experience,
  Gallery,
  Header,
  Image,
  Intro,
  Item,
  Masonry,
  TechStackInput,
  TechStackList,
  VisitorComment,
} from 'dev-portfolio';
import styled from 'styled-components';

import './App.css';
import {
  CardInstruction,
  ChannelInstruction,
  ContactInstruction,
  DisplayPortfolioInstruction,
  Introduction,
  TeckstackInputInstruction,
  VisitorCounterInstruction,
} from './common';
import color from './common/style/theme';
import useComment from './hooks/useComment';

function App() {
  /**
   * If you want to view README.md of 'dev-portfolio', go to the link below.
   * {@link https://github.com/modern-agile-team/dev-portfolio#readme}
   */

  /* These are variables and handler functions used in VisitorComment component. */
  const {
    comment,
    commentList,
    password,
    nickname,
    handleChangeDescription,
    handleChangeNickname,
    handleChangePassword,
    handleCreateComment,
  } = useComment();

  return (
    /**
     * The 'className' in the <div> tag surrounding the components of 'dev-portfolio' must be 'App'.
     * Only then can the SideBar in the <Header> component recognize id props and automatically assign all components into the SideBar.
     */
    <div className="App">
      {/**
       * @component Header
       * {@link https://github.com/modern-agile-team/dev-portfolio#header}
       */}

      <Header
        headerBackgroundColor={color.mainColor}
        logoOption={{
          redirectUrl: '/',
          title: 'About Me',
          logoHidden: true,
          titleColor: `${color.pointColor}`,
          titleSize: '30px',
        }}
        channels={[
          {
            name: 'github',
            redirectUrl: 'https://github.com/rugaheedori',
            color: `${color.pointColor}`,
            size: '30px',
          },
        ]}
        sideBarOption={{
          mainTitle: 'dev-portfolio',
          mainTitleSize: '24px',
          mainTitleColor: 'white',
          mainTitleAlign: 'left',
          mainTitleBorderColor: 'white',
          iconName: 'ant-design:menu-fold-outlined', //Refer to the guidelines.
          iconSize: '28px',
          iconColor: `${color.pointColor}`,
          iconMargin: '0px 12px 0px 12px',
          itemTextColor: 'white',
          itemTextAlign: 'left',
          itemBackgroundColor: `${color.mainColor}`,
          itemHoverdBackgroundColor: `${color.pointColor}`,
          backgroundColor: `${color.mainColor}`,
        }}
      />

      {/**
       * Just introduction for dev-portfolio-app.
       *
       * If you want to view internal of Introduction,
       * go to the './src/common/instruction/Introduction.tsx'
       */}
      <Introduction id="['Manual Introduction', 'bx:home-smile']" />

      {/**
       * @component Intro
       * {@link https://github.com/modern-agile-team/dev-portfolio#intro}
       */}
      <Intro
        id="['Intro', 'clarity:cursor-hand-open-line']"
        title="my favorite phrase"
        shortIntro="Sometimes a short phrase can make a big difference."
        backgroundColor={color.mainColor}
        titleColor={color.pointColor}
        shortIntroColor="white"
        description={getRandomeProvers(proverbs)}
        textAlign="center"
      />

      {/**
       * Just introduction for TechStackInput component.
       *
       * If you want to view internal of TeckstackInputInstruction,
       * go to the './src/common/instruction/TeckstackInputInstruction.tsx'
       */}
      <TeckstackInputInstruction id="['TechStackInput', 'fa:stack-overflow']" />

      {/**
       * TechStackInput used only to find the logoName value in the TechStackList.
       *
       * @component TechStackInput
       * {@link none}
       */}
      <TechStackInput />

      {/**
       * @component TechStackList
       * {@link https://github.com/modern-agile-team/dev-portfolio#techstacklist}
       */}
      <TechStackListTitle id="['TechStackList', 'bx:coin-stack']">
        Tech Stack List
      </TechStackListTitle>
      <TechStackList
        techStackList={[
          {
            nameOption: {
              name: 'Javascript',
              logoName: 'Javascript',
              fontSize: '18px',
              logoSize: '24px',
            },
            progressBarOption: {
              rateText: '45%',
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.mainColor}`,
              width: '100%',
              height: '35px',
            },
          },
          {
            nameOption: {
              name: 'Typescript',
              logoName: 'typescript-icon',
              fontSize: '18px',
              logoSize: '24px',
            },
            progressBarOption: {
              rateText: '30%',
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.mainColor}`,
              colorFrom: `${color.pointColor}`,
              width: '100%',
              height: '35px',
              isBlinking: true,
            },
          },
          {
            nameOption: {
              name: 'Nodejs',
              logoName: 'Nodejs',
              fontSize: '18px',
              logoSize: '24px',
            },
            progressBarOption: {
              rateText: '85%',
              rateTextColor: `${color.lightGrey}`,
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.mainColor}`,
              width: '100%',
              height: '35px',
            },
          },
          {
            nameOption: {
              name: 'nestjs',
              logoName: 'Nestjs',
              fontSize: '18px',
              logoSize: '24px',
            },
            progressBarOption: {
              rateText: '85%',
              rateTextColor: `${color.lightGrey}`,
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.mainColor}`,
              width: '100%',
              height: '35px',
            },
          },
          {
            nameOption: {
              name: 'graphql',
              logoName: 'graphql',
              fontSize: '18px',
              logoSize: '24px',
            },
            progressBarOption: {
              rateText: '85%',
              rateTextColor: `${color.lightGrey}`,
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.mainColor}`,
              width: '100%',
              height: '35px',
            },
          },
        ]}
      />

      {/**
       * @component ProgressBar
       * {@link https://github.com/modern-agile-team/dev-portfolio#progressbar}
       *
       * If you want to view ProgressBar component,
       * go to the './src/common/instruction/ProgressBarInstruction.tsx'
       */}
      {/* <ProgressBarInstruction id="['ProgressBar', 'ci:bar-chart-horizontal']" /> */}

      {/**
       * @component Skill
       * {@link https://github.com/modern-agile-team/dev-portfolio#skill}
       *
       * If you want to view Skill component,
       * go to the './src/common/instruction/SkillInstruction.tsx'
       */}
      {/*<SkillInstruction id="['Skill', 'charm:stack']" /> */}

      {/**
       * Just introduction for Carousel, Gallery and Masonry.
       *
       * If you want to view internal of DisplayPortfolioInstruction,
       * go to the './src/common/instruction/DisplayPortfolioInstruction.tsx'
       */}
      <DisplayPortfolioInstruction />

      {/**
       * @component Carousel
       * {@link https://github.com/modern-agile-team/dev-portfolio#carousel}
       */}
      <CarouselWrap>
        <Carousel id="['Carousel', 'bx:carousel']">
          <Item title="1" />
          <Item title="2" />
          <Item title="3" />
        </Carousel>
      </CarouselWrap>

      {/**
       * @component Gallery
       * {@link https://github.com/modern-agile-team/dev-portfolio#gallery}
       */}
      {/* <Gallery id="['Gallery', 'clarity:image-gallery-line']">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
          <Item
            key={idx}
            hoverdInnerBorderColor={color.mainColor}
            titleColor={color.pointColor}
          />
        ))}
      </Gallery> */}

      {/**
       * @component Masonry
       * {@link https://github.com/modern-agile-team/dev-portfolio#masonry}
       */}
      <Masonry id="['Masonry', 'ri:layout-masonry-line']">
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/600/900/?random" />
        <Image src="https://picsum.photos/300/400/?random" />
        <Image src="https://picsum.photos/600/400/?random" />
        <Image src="https://picsum.photos/600/900/?random" />
        <Image src="https://picsum.photos/600/300/?random" />
        <Image src="https://picsum.photos/400/700/?random" />
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/600/800/?random" />
        <Image src="https://picsum.photos/600/300/?random" />
        <Image src="https://picsum.photos/600/500/?random" />
        <Image src="https://picsum.photos/500/600/?random" />
        <Image src="https://picsum.photos/700/600/?random" />
      </Masonry>

      {/**
       * @component VisitorCounter
       * {@link https://github.com/modern-agile-team/dev-portfolio#visitorcounter}
       *
       * If you want to view Card component,
       * go to the './src/common/instruction/VisitorCounterInstruction.tsx'
       */}
      <VisitorCounterInstruction id="['VisitorCounter', 'mdi:counter']" />

      {/**
       * @component VisitorComment
       * {@link https://github.com/modern-agile-team/dev-portfolio#visitorcomment}
       */}
      <VisitorCommentTitle id="['VisitorComment', 'bx:comment-dots']">
        Visitor Comments
      </VisitorCommentTitle>
      <VisitorComment
        backgroundColor={color.mainColor}
        progressbarColor={color.pointColor}
        handleChangeDescription={handleChangeDescription}
        handleChangeNickname={handleChangeNickname}
        handleChangePassword={handleChangePassword}
        handleCreateComment={handleCreateComment}
        comment={comment}
        nickname={nickname}
        password={password}
        commentList={commentList}
        buttonColor={color.mainColor}
        listNicknameColor={color.mainColor}
        listDateColor={color.pointColor}
      />

      {/**
       * @component Card
       * {@link https://github.com/modern-agile-team/dev-portfolio#card}
       *
       * If you want to view Card component,
       * go to the './src/common/instruction/CardInstruction.tsx'
       */}
      <CardInstruction id="['Card', 'bi:card-list']" />

      {/**
       * @component Experience
       * {@link https://github.com/modern-agile-team/dev-portfolio#experience}
       */}
      <Experience
        id="['Experience', 'carbon:list-boxes']"
        theme="vertical"
        historyList={[
          {
            startDate: '2021.05',
            endDate: '2022.02',
            title: '모던 애자일',
            description: `
              인덕대학교 교내 소프트웨어 개발 동아리 \n
              - 교내 동아리 홍보 & 운영 사이트 제작, 서비스 상용화 \n
              `,
          },
          {
            startDate: '2022.03.10',
            endDate: 'ing',
            title: 'Probit(오션스)',
            description: `
              가상 화폐 거래 플랫폼 PROBIT 백엔드 개발자 \n
              - 기존 코드 유지 보수
              - 웹 사이트 리뉴얼 참여
              `,
          },
        ]}
      />

      {/**
       * @component Channel
       * {@link https://github.com/modern-agile-team/dev-portfolio#channel}
       *
       * @component Channels
       * {@link https://github.com/modern-agile-team/dev-portfolio#channels}
       *
       * If you want to view Channel and Channels component,
       * go to the './src/common/instruction/ChannelInstruction.tsx'
       */}
      <ChannelInstruction id="['Channel', 'fluent:channel-48-filled']" />

      {/**
       * Just introduction for Contact.
       *
       * If you want to view internal of ContactInstruction,
       * go to the './src/common/instruction/ContactInstruction.tsx'
       */}
      <ContactInstruction />

      {/**
       * @component Contact
       * {@link https://github.com/modern-agile-team/dev-portfolio#contact}
       */}
      <Contact
        id="['Contact', 'fluent:contact-card-20-regular']"
        titleColor={color.pointColor}
        subTitleColor={color.lightGrey}
        backgroundColor={color.mainColor}
        channels={[
          {
            name: 'github',
            redirectUrl: 'https://',
            color: `${color.pointColor}`,
          },
          {
            name: 'facebook',
            redirectUrl: 'https://',
            color: `${color.pointColor}`,
          },
        ]}
        aboutMeInfos={[
          {
            title: 'Where I live',
            titleColor: `${color.pointColor}`,
            description: 'Seoul, Republic of Korea',
            descriptionColor: `${color.lightGrey}`,
          },
          {
            title: 'Give me a call',
            titleColor: `${color.pointColor}`,
            description: 'T. +82 (0)10 1234 5678',
            descriptionColor: `${color.lightGrey}`,
          },
          {
            title: 'Or, why don’t you email me?',
            titleColor: `${color.pointColor}`,
            description: 'dev-portfolio@gmail.com',
            descriptionColor: `${color.lightGrey}`,
          },
        ]}
      />
    </div>
  );
}

export default App;

/**
 * Just styled component for TechStackList's title
 *
 * If you don't need this, delete both TechStackListTitle component and the style components below.
 */
const TechStackListTitle = styled.h1`
  color: ${color.mainColor};
  margin: 1em 1em;
  padding-bottom: 15px;
  border-bottom: 1px solid;
`;

/**
 * Just styled component for VisitorComment's title
 *
 * If you don't need this, delete both VisitorCommentTitle component and the style components below.
 */
const VisitorCommentTitle = styled.h1`
  margin: 1em 1em 0 1em;
  padding-bottom: 15px;
`;

/**
 * Just styled component for Carousel's title
 *
 * If you don't need this, delete both CarouselWrap component and the style components below.
 */
const CarouselWrap = styled.div`
  background-color: ${color.mainColor};
  padding: 2em 0;
  svg {
    color: white;
  }
`;

const proverbs = [
  {
    en: 'Tough times never last, but tough people do. — Robert H. Schuller',
    kr: '힘든 시간들은 절대로 오래가지 않지만, 강인한 사람들은 오래 간다. — 로버트 슐러',
  },
  {
    en: 'This too shall pass. – Et hoc transibit',
    kr: '이또한 지나가리라. - 에트 혹 트란시비트',
  },
  {
    en: 'Turn your wounds into wisdom. – Oprah Gail Winfrey',
    kr: '상처를 지혜로 바꾸세요. - 오프라 윈프리',
  },
];

function getRandomeProvers(proverbs: { en: string; kr: string }[]) {
  const { en, kr } =
    proverbs[parseInt((Math.random() * proverbs.length).toString())];
  const fixedDiscription = `
    작은 문구가 얼마나 큰 도움이 되겠어라고 생각하기 쉽지만 언젠가는 자신에게 와닿는 문구를 만나게 될것입니다. \n
    와닿는 문구를 자신과 가까운 곳에 보이도록 적어보세요. \n
    한 번 본 문구는 다시 보았을 때 처음과 같은 감흥을 느끼기는 어렵습니다. \n
    하지만, 반복해서 눈으로 익힌다면 무의식속에서 자리잡아 그것의 영향을 자신도 모르게 받게 될 것입니다.
  `;
  return `${en} \n \n ${kr} \n \n ${fixedDiscription}`;
}

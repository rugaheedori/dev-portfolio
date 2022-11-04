import { Card } from 'dev-portfolio';
import styled from 'styled-components';

const CardInstruction = ({ id }: { id: string }) => {
  return (
    <div id={id}>
      <CardTitle>최근 내가 좋아하는 사진</CardTitle>
      <CardWrap>
        <Card width="20vw" height="20vw" shape="round-square" hover="down">
          <img width="100%" height="100%" src="images/우리동네_하늘.jpg" />
        </Card>
        <Card width="20vw" height="20vw" shape="round-square" hover="zoom">
          <img width="100%" height="100%" src="images/하늘_공원.jpg" />
        </Card>
        <Card width="20vw" height="20vw" shape="round-square" hover="up">
          <img width="100%" height="100%" src="images/회사_오리.jpg" />
        </Card>
      </CardWrap>
    </div>
  );
};

export default CardInstruction;

const CardTitle = styled.h1`
  margin: 2em 1em 0 1em;
  padding-bottom: 15px;
  border-bottom: 1px solid;
`;

const CardWrap = styled.div`
  display: flex;
  padding: 3em 3em;
  justify-content: space-around;
`;

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import color from '../style/theme';

const TypingTitle = () => {
  const txt = 'Backend-developer Gahee Ryu';
  const [Text, setText] = useState('');
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]);
      setCount(Count + 1);
    }, 100);
    if (Text.length === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <MainTitle className="main-title">
      <span>{Text}</span>
    </MainTitle>
  );
};

/**
 * Just introduction for dev-portfolio-app.
 *
 * If you want to view internal of Introduction,
 * go to the './src/common/instruction/Introduction.tsx'
 */
const Introduction = ({ id }: { id: string }) => {
  return (
    <Wrap id={id}>
      <span>{TypingTitle()}</span>
      <span></span>
    </Wrap>
  );
};

export default Introduction;

const Wrap = styled.div`
  padding: 2em;
  /* height: 30vh; */
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-weight: 400;
  /* text-align: center; */
  /* justify-content: space-between; */
`;

const MainTitle = styled.h1`
  padding-bottom: 15px;
  color: ${color.mainTitle};
`;

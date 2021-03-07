import styled from 'styled-components';

interface BgProps {
  bgUrl: string;
}

export const BlurredBg = styled.div<BgProps>`
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;

  display: block;
  width: 100vw;
  height: 100vh;

  background: url(${p => p.bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

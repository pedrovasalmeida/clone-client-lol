import styled, { css } from 'styled-components';

interface InputProps {
  hasFocused: boolean;
}
export const Container = styled.div<InputProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 60%;
  height: 50px;

  margin: 10px 0;
  padding: 0 10px;

  border: 0;
  border-radius: 4px;
  background: #ddd;
  border: 2px solid #ddd;

  transition: all 150ms ease;

  ${p =>
    p.hasFocused &&
    css`
      border: 2px solid #000;
      background: #fff;
    `}

  > span {
    position: absolute;

    color: gray;

    font-size: 12px;
    font-weight: bold;

    text-transform: uppercase;
    transition: all 300ms ease;

    ${p =>
      p.hasFocused &&
      css`
        transform: translateY(-13px);
        font-size: 9px;
      `}
  }

  > input {
    border: 0;
    background: none;
    height: 50%;
    width: 100%;
    transform: translateY(5px);
  }
`;

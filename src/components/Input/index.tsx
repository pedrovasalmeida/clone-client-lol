import React, { useRef, useState } from 'react';

import { Container } from './styles';

interface InputProps {
  text: string;
}

const Input: React.FC<InputProps> = ({ text }) => {
  const [hasFocused, setHasFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePutFocusOnInput = () => {
    setHasFocused(true);
    inputRef.current?.focus();
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleInputBlur = () => {
    if (inputValue.length < 1) {
      setHasFocused(false);
    } else {
      setHasFocused(true);
    }
  };

  return (
    <Container hasFocused={hasFocused} onClick={handlePutFocusOnInput}>
      <span>{text}</span>

      <input
        type={text === 'senha' ? 'password' : 'text'}
        ref={inputRef}
        onChange={e => handleInputChange(e.target.value)}
        onFocus={() => setHasFocused(true)}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export default Input;

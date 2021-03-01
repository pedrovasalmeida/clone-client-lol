import React, { InputHTMLAttributes, useRef, useState } from 'react';

import { useAuth } from '../../context/auth';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const Input: React.FC<InputProps> = ({ text, ...rest }) => {
  const [hasFocused, setHasFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { setUserData } = useAuth();

  const handlePutFocusOnInput = () => {
    setHasFocused(true);
    inputRef.current?.focus();
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setUserData(value);
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
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </Container>
  );
};

export default Input;

import React from 'react';

import { BlurredBg } from './styles';

interface BgProps {
  bgUrl: string;
}

const BlurredBackground: React.FC<BgProps> = ({ bgUrl }) => {
  return <BlurredBg bgUrl={bgUrl} />;
};

export default BlurredBackground;

import Image from 'next/image';
import React from 'react';
import { IconKey, IconURL } from '$constants/icons';

const IconFcst = ({ iconKey }: { iconKey: IconKey }) => {
  const icon = IconURL[iconKey];
  return <Image src={icon.url} alt={icon.alt} width={44} height={44} />;
};

export default IconFcst;

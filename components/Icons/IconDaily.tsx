import Image from 'next/image';
import React from 'react';
import { IconKey, IconURL } from '$constants/icons';

const IconDaily = ({ iconKey }: { iconKey: IconKey }) => {
  const icon = IconURL[iconKey];
  return <Image src={icon.url} alt={icon.alt} width={16} height={16} />;
};

export default IconDaily;

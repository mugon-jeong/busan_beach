import Image from 'next/image';
import React from 'react';
import { IconKey, IconURL } from '$constants/icons';

const IconOthers = ({ iconKey }: { iconKey: IconKey }) => {
  const icon = IconURL[iconKey];
  return <Image src={icon.url} alt={icon.alt} width={50} height={50} />;
};

export default IconOthers;

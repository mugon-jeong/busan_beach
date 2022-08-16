import Image from 'next/image';
import React from 'react';
import { IconKey, IconURL } from '$components/Content/Contents';

const ContentOther = ({ iconKey }: { iconKey: string }) => {
  return <Image src={iconKey} alt={''} width={300} height={200} style={{ borderRadius: 10 }} />;
};

export default ContentOther;

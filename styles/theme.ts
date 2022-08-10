const deviceSizes = {
  mobileSE: '320px',
  mobile13P: '428px',
  tablet: '960px',
  pc: '1280px',
};

const device = {
  mobileSE: `screen and (max-width: ${deviceSizes.mobileSE})`,
  mobile13P: `screen and (max-width: ${deviceSizes.mobile13P})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  pc: `screen and (max-width: ${deviceSizes.pc})`,
};

const color = {
  black: '#2D3641',
  deepBlue: '#3F464E',
  blue: '#2086C4',
  deepCoral: '#FE6F69',
  coral: '#FF8067',
  sand: '#FFF6E5',
  white: '#f0f0f0',
};

const theme = {
  device,
  color,
};

export default theme;

import { TypographyOptions } from '@mui/material/styles/createTypography';

type TypographyOverridesOptions = () => TypographyOptions;

const typography: TypographyOverridesOptions = () => {
  return {
    fontFamily: 'Product Sans, sans-serif',
    color: '#5F6368',
  };
};

export default typography();

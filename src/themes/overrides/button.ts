import { ButtonProps, Components, Theme } from '@mui/material';
import { alpha } from '@mui/material/styles';

export const pxToRem = (value: number) => `${value / 16}rem`;

type ButtonOverridesOptions = () => {
  MuiButton: Components<Theme>['MuiButton'];
};

const button: ButtonOverridesOptions = () => ({
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      disableElevation: true,
      size: 'large',
    },
    styleOverrides: {
      root: ({ ownerState, theme }: { ownerState: ButtonProps; theme: Theme }) => ({
        fontWeight: 500,
        fontSize: pxToRem(12),
        borderRadius: pxToRem(8),
        textTransform: 'none',
        border: 'none',
        ...(ownerState.color === 'inherit' && {
          background: 'transparent',
          '&:hover': {
            background: 'transparent',
          },
        }),
        ...(ownerState.color === 'primary' && {
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
          '&:hover': {
            backgroundColor: `${alpha(theme.palette.primary.main, 0.8)}`,
          },
          '&.Mui-disabled': {
            backgroundColor: `${alpha(theme.palette.primary.main, 0.44)} !important`,
            color: `${alpha(theme.palette.common.white, 0.8)} !important`,
          },
        }),
        ...(ownerState.color === 'secondary' && {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: '#E2F2E8',
          },
          '& .Mui-disabled': {
            backgroundColor: `${alpha(theme.palette.secondary.main, 0.44)} !important`,
            color: `${alpha(theme.palette.primary.main, 0.8)} !important`,
          },
        }),
        ...(ownerState.color === 'error' && {
          background: '#FFF3F3',
          color: theme.palette.error.main,
          '&:hover': {
            backgroundColor: '#F9EAEC',
          },
          '& .Mui-disabled': {
            backgroundColor: `${alpha('#FFF3F3', 0.44)} !important`,
            color: `${alpha(theme.palette.common.white, 0.8)} !important`,
          },
        }),
        ...(ownerState.color === 'info' && {
          background: theme.palette.info.light,
          color: theme.palette.info.main,
          '&:hover': {
            backgroundColor: '#FFFDF0',
          },
          '& .Mui-disabled': {
            backgroundColor: `${alpha(theme.palette.info.main, 0.44)} !important`,
            color: `${alpha(theme.palette.common.white, 0.8)} !important`,
          },
        }),
        ...(ownerState.size === 'large' && {
          paddingBlock: pxToRem(11),
        }),
      }),
    },
  },
});

export default button();

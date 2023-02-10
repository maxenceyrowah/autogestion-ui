import { alpha, Components, InputBaseProps, Theme } from '@mui/material';

export const pxToRem = (value: number) => `${value / 16}rem`;

type InputBaseOverridesOptions = () => {
  MuiInputBase: Components<Theme>['MuiInputBase'];
};

const inputBase: InputBaseOverridesOptions = () => ({
  MuiInputBase: {
    defaultProps: {
      size: 'medium',
    },
    styleOverrides: {
      root: ({ ownerState, theme }: { ownerState: InputBaseProps; theme: Theme }) => ({
        'label + &': {
          // Todo a voir
          marginTop: theme.spacing(2.5),
        },
        // input
        fontWeight: 500,
        fontSize: pxToRem(14),
        borderRadius: pxToRem(8),
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: ownerState.error ? `1px solid ${theme.palette.error.main}` : '1px solid #ced4da',
        padding: `${pxToRem(10)} ${pxToRem(12)}`,
        transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
        '&:focus-within': {
          borderColor: ownerState.error
            ? `1px solid ${theme.palette.error.main}`
            : theme.palette.primary.main,
          boxShadow: ownerState.error
            ? `${alpha(theme.palette.error.main, 0.25)} 0 0 0 0.2rem`
            : `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        },
        '& .MuiInputBase-inputSizeSmall': {
          paddingBottom: 0,
        },
        // helpertext style
        '& + p': {
          marginLeft: 0,
        },
        '&.Mui-error + p': {
          color: theme.palette.error.main,
        },
      }),
    },
  },
});

export default inputBase();

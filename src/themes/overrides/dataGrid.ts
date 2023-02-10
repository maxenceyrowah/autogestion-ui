import { Theme } from '@mui/material';

type DataGridOverridesOptions = () => {
  MuiDataGrid: any;
};

const dataGrid: DataGridOverridesOptions = () => ({
  MuiDataGrid: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        borderRadius: 0,
        border: '1px solid transparent',
        '& .MuiTablePagination-root': {
          borderTop: 0,
        },
        '& .MuiDataGrid-toolbarContainer': {
          padding: theme.spacing(2),
          backgroundColor: '#F4F6F8',
          '& .MuiButton-root': {
            marginRight: theme.spacing(1.5),
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
        '& .MuiDataGrid-cell, .MuiDataGrid-columnsContainer': {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
        '& .MuiDataGrid-columnSeparator': {
          color: theme.palette.divider,
        },
        '& .MuiDataGrid-columnHeader[data-field="__check__"]': {
          padding: 0,
        },
      }),
    },
  },
  MuiGridMenu: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        '& .MuiDataGrid-gridMenuList': {
          // boxShadow: theme.customShadows.z20,
          borderRadius: theme.shape.borderRadius,
        },
        '& .MuiMenuItem-root': {
          ...theme.typography.body2,
        },
      }),
    },
  },
  MuiGridFilterForm: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        padding: theme.spacing(1.5, 0),
        '& .MuiFormControl-root': {
          margin: theme.spacing(0, 0.5),
        },
        '& .MuiInput-root': {
          marginTop: theme.spacing(3),
          '&::before, &::after': {
            display: 'none',
          },
          '& .MuiNativeSelect-select, .MuiInput-input': {
            ...theme.typography.body2,
            padding: theme.spacing(0.75, 1),
            borderRadius: theme.shape.borderRadius,
            backgroundColor: '#F4F6F8',
          },
          '& .MuiSvgIcon-root': {
            right: 4,
          },
        },
      }),
    },
  },
  MuiGridPanelFooter: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        padding: theme.spacing(2),
        justifyContent: 'flex-end',
        '& .MuiButton-root': {
          '&:first-of-type': {
            marginRight: theme.spacing(1.5),
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
          '&:last-of-type': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          },
        },
      }),
    },
  },
});

export default dataGrid();

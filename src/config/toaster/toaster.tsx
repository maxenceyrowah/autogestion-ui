import {
  OptionsObject,
  SnackbarMessage,
  SnackbarOrigin,
  useSnackbar,
  VariantType,
  WithSnackbarProps,
} from 'notistack';
import React from 'react';

let useSnackbarRef: WithSnackbarProps;

export const SnackbarUtilsConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export default {
  success(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast({ msg, variant: 'success', options });
  },
  warning(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast({ msg, variant: 'warning', options });
  },
  info(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast({ msg, variant: 'info', options });
  },
  error(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast({ msg, variant: 'error', options });
  },
  toast({
    msg,
    variant = 'default',
    options = {},
  }: {
    variant: VariantType;
    msg: SnackbarMessage;
    options?: OptionsObject;
  }) {
    useSnackbarRef.enqueueSnackbar(msg, { ...options, variant });
  },
};

export const anchorOrigin: SnackbarOrigin = {
  vertical: 'top',
  horizontal: 'right',
};

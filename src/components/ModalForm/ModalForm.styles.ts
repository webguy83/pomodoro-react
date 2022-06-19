import { SxProps, Theme } from '@mui/material';

export const ModalFormStyles: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 5,
};

export const CloseButtonStyles: SxProps<Theme> = {
  '&:hover': {
    path: {
      opacity: 1,
    },
  },
};

export const FontGroupContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  py: 4,
};

export const FormControlLabelStyles: SxProps<Theme> = {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center',
  m: 0,
  '&:not(:last-child)': {
    mr: 2,
  },
};

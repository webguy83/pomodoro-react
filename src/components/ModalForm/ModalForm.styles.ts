import { SxProps, Theme } from '@mui/material';

export const ModalFormStyles: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 5,
  width: '90%',
  maxWidth: 600,
  minWidth: 360,
};

export const CloseButtonStyles: SxProps<Theme> = {
  '&:hover': {
    path: {
      opacity: 1,
    },
  },
};

export const FontGroupContainer: SxProps<Theme> = (theme) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  py: 4,
});

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

export const SubHeadingStyles = (theme: Theme) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
});

export const TimeBoxStyles = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const LowerSubHeadings = (theme: Theme) => ({
  my: 1,
  [theme.breakpoints.down('sm')]: {
    mb: 2.5,
  },
});

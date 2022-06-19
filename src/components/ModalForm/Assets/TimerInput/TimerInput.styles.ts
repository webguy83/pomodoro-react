import { SxProps, Theme } from '@mui/material';

export const InputStyles: SxProps<Theme> = (theme: Theme) => ({
  bgcolor: theme.palette.secondary.light,
  borderRadius: 2.5,
  p: 1,
  [theme.breakpoints.down('sm')]: {
    minWidth: '9rem',
  },
});

export const InputBaseStyles: SxProps<Theme> = { color: (theme: Theme) => theme.palette.primary.main };

export const InputStylesHover = {
  '&:hover': {
    path: {
      strokeOpacity: 1,
    },
  },
};

export const IconButtonStyles: SxProps<Theme> = {
  p: 0.5,
};

export const LabelStyles: SxProps<Theme> = {
  fontSize: 12,
  lineHeight: 2.3,
  color: (theme: Theme) => theme.palette.primary.main,
  opacity: 0.4,
};

export const TimerInputContainer = (theme: Theme) => ({
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

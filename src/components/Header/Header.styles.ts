import { SxProps, Theme } from '@mui/material';

export const HeaderImgStyles: SxProps<Theme> = (theme: Theme) => ({
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
});

import { SxProps, Theme } from '@mui/material';
import { centerContent } from '../../utils';

export const MainTimerStyle: SxProps<Theme> = {
  ...centerContent,
  backgroundImage: 'linear-gradient(125deg, #0E112A 0%, #2E325A 100%)',
  borderRadius: '50%',
  minWidth: '100%',
  aspectRatio: '1/1',
  boxShadow: '-45px -25px 90px -55px #2e325a, 45px 25px 90px -55px #0e112a;',
};

export const InnerBgStyle: SxProps<Theme> = {
  backgroundColor: (theme: Theme) => theme.palette.primary.dark,
  width: '95%',
  aspectRatio: '1/1',
  borderRadius: '50%',
  position: 'relative',
};

export const MainTimerLineStyle = {
  p: 2,
  '& .MuiCircularProgress-circle': {
    strokeLinecap: 'round',
  },
};

export const TimerInfoStyle: SxProps<Theme> = {
  ...centerContent,
  color: (theme: Theme) => theme.palette.secondary.main,
  position: 'absolute',
  top: '50%',
  left: '50%',
  flexDirection: 'column',
  transform: 'translate(-50%, -50%)',
};

export const StatusStyle = {
  textTransform: 'uppercase',
  letterSpacing: 15,
  fontWeight: 700,
  fontSize: 16,
};

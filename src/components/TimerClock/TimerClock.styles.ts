import { Theme } from '@mui/material';
import { centerContent } from '../../utils';

export const MainTimerStyle = {
  ...centerContent,
  backgroundImage: 'linear-gradient(125deg, #0E112A 0%, #2E325A 100%)',
  borderRadius: '50%',
  minWidth: '100%',
  aspectRatio: '1/1',
  boxShadow: '-45px -25px 90px -55px #2e325a, 45px 25px 90px -55px #0e112a;',
};

export const InnerBgStyle = {
  backgroundColor: (theme: Theme) => theme.palette.primary.dark,
  width: '91%',
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

export const TimerInfoStyle = {
  ...centerContent,
  color: (theme: Theme) => theme.palette.secondary.main,
  position: 'absolute',
  top: '50%',
  left: '50%',
  flexDirection: 'column',
  transform: 'translate(-50%, -50%)',
};

export const TimerStyle = {
  fontSize: 100,
  letterSpacing: -5,
};

export const StatusStyle = {
  textTransform: 'uppercase',
  letterSpacing: 15,
};

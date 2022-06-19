import { styled } from '@mui/material';
import MUIToggleButton from '@mui/material/ToggleButton';

export const ModeButton = styled(MUIToggleButton)(({ theme }) => ({
  padding: '1rem 1.95rem',
  borderRadius: '50px !important',
  fontSize: 14,
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    padding: '.8rem 1rem',
  },
  fontWeight: 700,
  textTransform: 'lowercase',
  color: theme.palette.secondary.main,
  '&.Mui-selected, &.Mui-selected:hover': {
    cursor: 'default',
  },
  '&:not(.Mui-selected) span': {
    opacity: 0.4,
    '&:hover': {
      opacity: 1,
    },
  },
}));

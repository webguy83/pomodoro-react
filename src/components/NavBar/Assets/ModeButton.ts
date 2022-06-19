import { styled, ToggleButton } from '@mui/material';

interface ModeButtonProps {
  font: string;
  currentselectedcolour: string;
}

export const ModeButton = styled(ToggleButton)<ModeButtonProps>(({ theme, font, currentselectedcolour }) => ({
  padding: '1rem 1.95rem',
  borderRadius: '50px !important',
  fontSize: 14,
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    padding: '.8rem 1rem',
  },
  fontWeight: 700,
  fontFamily: font,
  textTransform: 'lowercase',
  color: theme.palette.secondary.main,
  '&.Mui-selected, &.Mui-selected:hover': {
    cursor: 'default',
    backgroundColor: currentselectedcolour,
  },
  '&:not(.Mui-selected) span': {
    opacity: 0.4,
    '&:hover': {
      opacity: 1,
    },
  },
}));

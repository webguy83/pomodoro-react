import { Radio, styled } from '@mui/material';

interface ColorRadioProps {
  bgcolor?: string;
}

export default styled(Radio)<ColorRadioProps>(({ theme, bgcolor = '#F87070' }) => ({
  backgroundColor: bgcolor,

  '& .MuiSvgIcon-root': {
    display: 'none',
  },
  '&.Mui-checked, &.Mui-checked:hover': {
    backgroundColor: bgcolor,
    cursor: 'default',
    '& + .MuiTypography-root': {
      color: theme.palette.primary.dark,
    },
  },
  '&:hover': {
    backgroundColor: bgcolor,

    '&:not(.Mui-checked)::before': {
      content: '""',
      position: 'absolute',
      width: '3.1em',
      height: '3.1em',
      borderRadius: '50%',
      border: `2px solid ${theme.palette.secondary.light}`,
      background: theme.palette.common.white,
      zIndex: -1,
    },
  },
  '& + .MuiFormControlLabel-label': {
    position: 'absolute',
    top: 7,
    display: 'none',
    color: theme.palette.primary.dark,
  },
  '&.Mui-checked + .MuiFormControlLabel-label': {
    display: 'block',
  },
  padding: 20,
}));

import { Radio, styled } from '@mui/material';

interface FontRadioProps {
  fontFamily?: string;
  fontWeight?: number;
}

export default styled(Radio)<FontRadioProps>(({ theme, fontFamily = theme.typography.fontFamily, fontWeight = 700 }) => ({
  backgroundColor: theme.palette.secondary.light,

  '& .MuiSvgIcon-root': {
    display: 'none',
  },
  '&.Mui-checked, &.Mui-checked:hover': {
    backgroundColor: theme.palette.primary.dark,
    cursor: 'default',
    '& + .MuiTypography-root': {
      color: theme.palette.common.white,
    },
  },
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,

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
  '& + .MuiTypography-root': {
    position: 'absolute',
    color: theme.palette.primary.main,
    fontFamily,
    fontWeight,
  },
  '&:not(.Mui-checked) + .MuiFormControlLabel-label': {
    opacity: 0.73,
  },
  padding: 20,
}));

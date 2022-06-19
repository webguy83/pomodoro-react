import { Button, styled } from '@mui/material';

interface SubmitButtonProps {
  buttoncolor: string;
}

export default styled(Button)<SubmitButtonProps>(({ theme, buttoncolor }) => ({
  display: 'block',
  padding: '.9rem 3rem',
  borderRadius: '50px !important',
  fontSize: 16,
  fontWeight: 700,
  textTransform: 'lowercase',
  '&:first-letter': {
    textTransform: 'capitalize',
  },
  color: theme.palette.common.white,
  backgroundColor: buttoncolor,
  '&:hover': {
    backgroundColor: '#FBA2A2',
  },
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
}));

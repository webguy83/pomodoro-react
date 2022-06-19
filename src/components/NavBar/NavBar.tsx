import { styled } from '@mui/material';
import Box from '@mui/material/Box';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, Dispatch, SetStateAction } from 'react';
import { ToggleButtonGroupStyles } from './NavBar.styles';
import { Mode } from '../../enums';

interface NavBarProps {
  currentColour: string;
  mode: string;
  setMode: Dispatch<SetStateAction<Mode>>;
}

export default function NavBar({ currentColour, mode, setMode }: NavBarProps) {
  const handleChange = (_evt: MouseEvent<HTMLElement>, newOption: Mode) => {
    if (newOption !== null) {
      setMode(newOption);
    }
  };

  const ModeButton = styled(ToggleButton)(({ theme }) => ({
    padding: '.7rem 2rem',
    borderRadius: '50px !important',
    fontSize: 14,
    fontWeight: 700,
    textTransform: 'lowercase',
    color: theme.palette.secondary.main,
    '&.Mui-selected, &.Mui-selected:hover': {
      cursor: 'default',
      backgroundColor: currentColour,
    },
    '&:not(.Mui-selected) span': {
      opacity: 0.4,
      '&:hover': {
        opacity: 1,
      },
    },
  }));

  return (
    <ToggleButtonGroup sx={ToggleButtonGroupStyles} value={mode} exclusive onChange={handleChange}>
      <ModeButton value={Mode.Pomodoro} aria-label={Mode.Pomodoro}>
        <Box component='span'>{Mode.Pomodoro}</Box>
      </ModeButton>
      <ModeButton value={Mode.ShortBreak} aria-label={Mode.ShortBreak}>
        <Box component='span'>{Mode.ShortBreak.replace('_', ' ')}</Box>
      </ModeButton>
      <ModeButton value={Mode.LongBreak} aria-label={Mode.LongBreak}>
        <Box component='span'>{Mode.LongBreak.replace('_', ' ')}</Box>
      </ModeButton>
    </ToggleButtonGroup>
  );
}

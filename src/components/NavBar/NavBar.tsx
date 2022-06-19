import Box from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, Dispatch, SetStateAction } from 'react';
import { ToggleButtonGroupStyles } from './NavBar.styles';
import { Mode } from '../../utils/enums';
import { ModeButton } from './Assets/ModeButton';

interface NavBarProps {
  currentselectedcolour: string;
  mode: string;
  setMode: Dispatch<SetStateAction<Mode>>;
  font: string;
}

export default function NavBar({ currentselectedcolour, mode, setMode, font }: NavBarProps) {
  const handleChange = (_evt: MouseEvent<HTMLElement>, newOption: Mode) => {
    if (newOption !== null) {
      setMode(newOption);
    }
  };

  return (
    <Box component='nav'>
      <ToggleButtonGroup sx={ToggleButtonGroupStyles} value={mode} exclusive onChange={handleChange}>
        <ModeButton font={font} currentselectedcolour={currentselectedcolour} value={Mode.Pomodoro} aria-label={Mode.Pomodoro}>
          <Box component='span'>{Mode.Pomodoro}</Box>
        </ModeButton>
        <ModeButton font={font} currentselectedcolour={currentselectedcolour} value={Mode.ShortBreak} aria-label={Mode.ShortBreak}>
          <Box component='span'>{Mode.ShortBreak.replace('_', ' ')}</Box>
        </ModeButton>
        <ModeButton font={font} currentselectedcolour={currentselectedcolour} value={Mode.LongBreak} aria-label={Mode.LongBreak}>
          <Box component='span'>{Mode.LongBreak.replace('_', ' ')}</Box>
        </ModeButton>
      </ToggleButtonGroup>
    </Box>
  );
}

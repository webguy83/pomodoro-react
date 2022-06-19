import Box from '@mui/material/Box';
import { InnerBgStyle, MainTimerLineStyle, MainTimerStyle, StatusStyle, TimerInfoStyle, TimerStyle } from './TimerClock.styles';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Font, Mode } from '../../enums';

interface TimeClockProps {
  currentselectedcolour: string;
  defaultSeconds: number;
  mode: Mode;
  font: string;
}

enum TimerStatus {
  Start = 'start',
  Pause = 'pause',
  Restart = 'restart',
}

function convertTime(secondsLeft: number) {
  let output = '';
  const secs = secondsLeft % 60;
  const mins = Math.floor(secondsLeft / 60) % 60;
  const hours = Math.floor(secondsLeft / 3600);

  function addLeadingZeroes(time: number) {
    return time < 10 ? `0${time}` : time;
  }
  if (hours > 0) {
    output += `${hours}:`;
  }
  output += `${addLeadingZeroes(mins)}:${addLeadingZeroes(secs)}`;

  return output;
}

export default function TimerClock({ currentselectedcolour, defaultSeconds, mode, font }: TimeClockProps) {
  const [timerStatus, setTimerStatus] = useState<TimerStatus>(TimerStatus.Start);
  const [seconds, setSeconds] = useState<number>(defaultSeconds);

  let letterSpacing;
  let fontWeight = 700;

  switch (font) {
    case Font.Kumbh:
      break;
    case Font.Space:
      letterSpacing = -10;
      fontWeight = 500;
      break;
    default:
      letterSpacing = 0;
  }

  useEffect(() => {
    let interval: number | undefined;

    if (!interval && timerStatus === TimerStatus.Pause) {
      interval = window.setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }

    if (timerStatus === TimerStatus.Start && seconds > 0) {
      clearInterval(interval);
    }

    if (seconds <= 0) {
      clearInterval(interval);
      setTimerStatus(TimerStatus.Restart);
    }

    return () => clearInterval(interval);
  }, [seconds, timerStatus]);

  useEffect(() => {
    setSeconds(defaultSeconds);
    setTimerStatus(TimerStatus.Start);
  }, [defaultSeconds, mode]);

  const onTimerButtonClick = () => {
    if (timerStatus === TimerStatus.Pause) {
      setTimerStatus(TimerStatus.Start);
    } else if (timerStatus === TimerStatus.Start) {
      setTimerStatus(TimerStatus.Pause);
    } else {
      setTimerStatus(TimerStatus.Start);
      setSeconds(defaultSeconds);
    }
  };

  return (
    <Button
      disableRipple
      onClick={onTimerButtonClick}
      sx={{
        ...MainTimerStyle,
        '&:hover': {
          cursor: 'pointer',
          '.timer-status': {
            color: currentselectedcolour,
          },
        },
      }}
    >
      <Box sx={InnerBgStyle}>
        <CircularProgress
          variant='determinate'
          size='100%'
          value={(seconds / defaultSeconds) * 100}
          thickness={1.5}
          sx={{
            ...MainTimerLineStyle,
            '&.MuiCircularProgress-root': {
              color: currentselectedcolour,
            },
          }}
        />
        <Box sx={TimerInfoStyle}>
          <Box component='span' sx={{ ...TimerStyle, fontFamily: font, letterSpacing, fontWeight }}>
            {convertTime(seconds)}
          </Box>
          <Box component='span' className='timer-status' sx={{ ...StatusStyle, fontFamily: font }}>
            {timerStatus}
          </Box>
        </Box>
      </Box>
    </Button>
  );
}

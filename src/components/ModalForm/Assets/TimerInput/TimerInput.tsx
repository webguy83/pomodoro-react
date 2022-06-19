import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import DecrementIcon from './Icons/DecrementIcon';
import IncrementIcon from './Icons/IncrementIcon';
import { IconButtonStyles, InputBaseStyles, InputStyles, InputStylesHover, LabelStyles, TimerInputContainer } from './TimerInput.styles';

interface TimerInputProps {
  label: string;
  data: number;
  setData: Dispatch<SetStateAction<number>>;
}

export default function TimerInput({ label, data, setData }: TimerInputProps) {
  const minValue = 1;
  const maxValue = 500;

  const inputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = parseInt(e.target.value);
    if (val >= minValue && val <= maxValue) {
      setData(val);
    } else if (val >= maxValue) {
      setData(maxValue);
    } else {
      setData(minValue);
    }
  };

  const onButtonClick = (incrementing: boolean) => {
    if (incrementing) {
      setData((prevValue) => (prevValue < maxValue ? (prevValue += 1) : maxValue));
    } else {
      setData((prevValue) => (prevValue > minValue ? (prevValue -= 1) : minValue));
    }
  };
  const id = label.replace('_', '-');
  return (
    <Box sx={TimerInputContainer} className='input-block'>
      <InputLabel sx={LabelStyles} htmlFor={id}>
        {label.replace('_', ' ')}
      </InputLabel>
      <Box display='flex' justifyContent='space-between' sx={InputStyles}>
        <InputBase sx={InputBaseStyles} id={id} inputProps={{ min: minValue, max: maxValue, size: 80 }} type='number' value={data} onChange={inputChange} />
        <Box display='flex' flexDirection='column'>
          <IconButton
            sx={{
              ...IconButtonStyles,
              ...InputStylesHover,
            }}
            onClick={() => onButtonClick(true)}
          >
            <IncrementIcon />
          </IconButton>
          <IconButton
            sx={{
              ...IconButtonStyles,
              ...InputStylesHover,
            }}
            onClick={() => onButtonClick(false)}
          >
            <DecrementIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

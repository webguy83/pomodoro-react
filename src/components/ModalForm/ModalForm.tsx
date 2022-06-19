import { FormControlLabel, IconButton, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import { ChangeEvent, Dispatch, FormEventHandler, forwardRef, SetStateAction, useState } from 'react';
import CloseIcon from './CloseIcon';
import Divider from '@mui/material/Divider';
import TimerInput from './Assets/TimerInput/TimerInput';
import { CloseButtonStyles, FontGroupContainer, FormControlLabelStyles, ModalFormStyles } from './ModalForm.styles';
import FontRadioButton from './Assets/FontRadioButton';
import ColorRadioButton from './Assets/ColorRadioButton';
import SubmitButton from './Assets/SubmitButton';
import { ApplicationData } from '../../interfaces';
import { Font } from '../../enums';

interface ModalFormProps {
  handleClose: () => void;
  applicationData: ApplicationData;
  setApplicationData: Dispatch<SetStateAction<ApplicationData>>;
}

export default forwardRef<HTMLFormElement, ModalFormProps>((props, ref) => {
  const { handleClose, applicationData, setApplicationData } = props;
  const [font, setFont] = useState(applicationData.font);
  const [colorBg, setColorBg] = useState(applicationData.color);
  const [pomodoroTime, setPomodoroTime] = useState(applicationData.pomodoro);
  const [shortBreakTime, setShortBreakTime] = useState(applicationData.short_break);
  const [longBreakTime, setLongBreakTime] = useState(applicationData.long_break);

  const onApplySettingsClick: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    setApplicationData({
      pomodoro: pomodoroTime,
      short_break: shortBreakTime,
      long_break: longBreakTime,
      font,
      color: colorBg,
    });
    handleClose();
  };

  const onColorChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setColorBg((evt.target as HTMLInputElement).value);
  };

  const onFontChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFont((evt.target as HTMLInputElement).value);
  };
  return (
    <Box component='form' onSubmit={onApplySettingsClick} position='relative' {...props} ref={ref} sx={ModalFormStyles} className='FancyBox'>
      <Box display='flex' justifyContent='space-between' sx={{ py: 4.5, px: 5 }}>
        <Typography component='h2' variant='h2'>
          Settings
        </Typography>
        <IconButton onClick={handleClose} sx={CloseButtonStyles}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ py: 4.5, px: 5 }}>
        <Typography component='h3' variant='h3'>
          Time (Minutes)
        </Typography>
        <Box display='flex' justifyContent='space-between' my={3} gap={2}>
          <TimerInput data={pomodoroTime} setData={setPomodoroTime} label='pomodoro' />
          <TimerInput data={shortBreakTime} setData={setShortBreakTime} label='short_break' />
          <TimerInput data={longBreakTime} setData={setLongBreakTime} label='long_break' />
        </Box>
        <Divider />
        <Box sx={FontGroupContainer}>
          <Typography component='h3' variant='h3' sx={{ my: 1 }}>
            Font
          </Typography>
          <Box display='flex' justifyContent='space-between' gap={2}>
            <RadioGroup aria-labelledby='font-radio-group' value={font} onChange={onFontChange} name='font-radio-group' sx={{ flexDirection: 'row' }}>
              <FormControlLabel sx={FormControlLabelStyles} value={Font.Kumbh} control={<FontRadioButton />} label='Aa' />
              <FormControlLabel sx={FormControlLabelStyles} value={Font.Roboto} control={<FontRadioButton fontFamily={Font.Roboto} fontWeight={400} />} label='Aa' />
              <FormControlLabel sx={FormControlLabelStyles} value={Font.Space} control={<FontRadioButton fontFamily={Font.Space} />} label='Aa' />
            </RadioGroup>
          </Box>
        </Box>
        <Divider />
        <Box sx={FontGroupContainer}>
          <Typography component='h3' variant='h3' sx={{ my: 1 }}>
            Color
          </Typography>
          <Box display='flex' justifyContent='space-between' gap={2}>
            <RadioGroup aria-labelledby='color-radio-group' value={colorBg} onChange={onColorChange} name='color-radio-group' sx={{ flexDirection: 'row' }}>
              <FormControlLabel sx={FormControlLabelStyles} value='red' control={<ColorRadioButton />} label={<CheckIcon />} />
              <FormControlLabel sx={FormControlLabelStyles} value='blue' control={<ColorRadioButton bgcolor='#70F3F8' />} label={<CheckIcon />} />
              <FormControlLabel sx={FormControlLabelStyles} value='purple' control={<ColorRadioButton bgcolor='#D881F8' />} label={<CheckIcon />} />
            </RadioGroup>
          </Box>
        </Box>
        <SubmitButton type='submit' disableRipple buttoncolor='#F87070'>
          Apply
        </SubmitButton>
      </Box>
    </Box>
  );
});

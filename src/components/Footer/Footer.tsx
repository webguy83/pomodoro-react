import IconButton from '@mui/material/IconButton';
import { FooterIconButtonStyles } from './Footer.styles';
import SettingsIcon from './SettingsIcon';

interface FooterProps {
  onSettingsIconClick: () => void;
}

export default function Footer({ onSettingsIconClick }: FooterProps) {
  return (
    <footer>
      <IconButton aria-label='settings icon' sx={FooterIconButtonStyles} onClick={onSettingsIconClick}>
        <SettingsIcon />
      </IconButton>
    </footer>
  );
}

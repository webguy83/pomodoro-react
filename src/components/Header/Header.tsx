import { Box } from '@mui/material';
import logo from '../../images/logo.svg';
import { HeaderImgStyles } from './Header.styles';

export default function Header() {
  return (
    <header>
      <h1 style={{ margin: 0, lineHeight: 0, textAlign: 'center' }}>
        <Box component='img' src={logo} alt='logo' sx={HeaderImgStyles} />
      </h1>
    </header>
  );
}

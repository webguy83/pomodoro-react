import Container from '@mui/material/Container';
import { useState } from 'react';
import { ApplicationData } from '../../utils/interfaces';
import NavBar from '../NavBar/NavBar';
import TimerClock from '../TimerClock/TimerClock';
import { MainContentStyles } from './MainContent.styles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '@mui/material/Modal';
import ModalForm from '../ModalForm/ModalForm';
import { Font, Mode } from '../../utils/enums';

const defaultData: ApplicationData = {
  pomodoro: 25,
  short_break: 5,
  long_break: 15,
  font: Font.Kumbh,
  color: 'red',
};

const colorTable: Record<string, string> = {
  red: '#F87070',
  blue: '#70F3F8',
  purple: '#D881F8',
};

export default function MainContent() {
  const [applicationData, setApplicationData] = useState<ApplicationData>(defaultData);
  const [mode, setMode] = useState<Mode>(Mode.Pomodoro);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Container maxWidth='sm' sx={MainContentStyles}>
        <Header />
        <NavBar font={applicationData.font} currentselectedcolour={colorTable[applicationData.color]} mode={mode} setMode={setMode} />
        <TimerClock font={applicationData.font} mode={mode} defaultSeconds={applicationData[mode] * 60} currentselectedcolour={colorTable[applicationData.color]} />
        <Footer onSettingsIconClick={handleOpen} />
      </Container>
      <Modal open={openModal} onClose={handleClose} aria-labelledby='settings' aria-describedby='settings'>
        <ModalForm applicationData={applicationData} setApplicationData={setApplicationData} handleClose={handleClose} />
      </Modal>
    </>
  );
}

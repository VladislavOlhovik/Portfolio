import { useEffect } from 'react';

import {
  Header,
  Main,
  Skills,
  Certifications,
  Projects,
  OpenToOffers,
  Contacts,
  Footer,
  Popup,
} from '@components';
import { emailAPI } from '@API';

import './App.scss';

function App() {
  useEffect(() => {
    emailAPI.sendNonPersonalInfo();
    emailAPI.sendLocation();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Main />
      <Skills />
      <Certifications />
      <Projects />
      <OpenToOffers />
      <Contacts />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;

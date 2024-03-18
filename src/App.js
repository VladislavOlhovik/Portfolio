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
  DataCollectionPopup,
} from '@components';
import { emailAPI } from '@API';

import './App.scss';

function App() {
  useEffect(() => {
    emailAPI.sendNonPersonalInfo();
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
      <DataCollectionPopup />
    </div>
  );
}

export default App;

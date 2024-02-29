import {
  Header,
  Main,
  Skills,
  Certifications,
  Projects,
  OpenToOffers,
  Contacts,
  Footer,
} from '@components';

import './App.scss';

function App() {
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
    </div>
  );
}

export default App;

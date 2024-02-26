import './App.scss';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import OpenToOffers from './openToOffers/OpenToOffers';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Certifications from './certifications/Certifications';

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

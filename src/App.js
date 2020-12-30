import './App.scss';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import RemoteWork from './remoteWork/RemoteWork';
import Skills from './skills/Skills';
import Projects from './projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <RemoteWork/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;

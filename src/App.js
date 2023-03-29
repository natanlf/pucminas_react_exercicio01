import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <>
      <Header/>
      <div id='container'>
        <Content/>
        <SideBar/>
      </div>
      <Footer/>
    </>
  );
}

export default App;

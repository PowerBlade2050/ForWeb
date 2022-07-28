// import logo from './logo.svg';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Page from './Page';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='App_flex'>
        <Nav />
        <Page />
      </section>
      <Footer />
    </div>
  );
}

export default App;

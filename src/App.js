import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Banner from './Component/Home/Banner/Banner';
import Footer from './Component/Footer/Footer';
import Feature from './Component/Home/Feature/Feature';
import CAtegory from './Component/Home/Category/CAtegory';

function App() {
  return (
    <div >
      <Header></Header>
      <Banner></Banner>
      <CAtegory></CAtegory>
      <Feature></Feature>
      <Footer></Footer>
    </div>
  );
}

export default App;

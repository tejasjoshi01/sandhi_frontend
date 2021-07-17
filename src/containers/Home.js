import Footer from '../components/Footer/Footer.js';
import Header from '../components/Header/Header.js';
import Banner from '../components/Banner/Banner.js';
import Categories from '../components/Categories/Categories.js';

function Home() {
  return (
    <div className="Home">
      <Header/>
      <Banner/>
      <Categories/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
}

export default Home;

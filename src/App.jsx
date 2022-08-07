import Header from './components/Header'
import Container from 'react-bootstrap/Container';
import Categories from './components/Categories'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import HeadingShadow from './components/HeadingShadow'
import NewArrivals from './components/NewArrivals';
import Slider from './components/Slider';
import HeadingLine from './components/HeadingLine';
import KnowMore from './components/KnowMore';
import Footer from './components/Footer';



function App() {
  return (
    <>
   <Header />
   <Image className="main_image" src='../public/images/12.png' fluid="false" />
   <Container>
   <KnowMore/>
   <HeadingShadow text={'Discover Categories'} />
   <Categories/>
   <HeadingShadow text={'New Arrivals'} />
   <NewArrivals />
   <Slider />
   </Container>
   <Footer />
   </>
  )
}

export default App

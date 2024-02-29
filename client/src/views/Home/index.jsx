
import HeroSection from '../../components/Hero/HeroSecrion.jsx';
import Appbar from '../../components/Navbar/Navbar.jsx'
import HomeContent from './content.jsx'
import './Home.css'


const Home = () => {
  return (
    <div>
    <Appbar />
      <HeroSection/>
      <HomeContent/>
    </div>
  )
}

export default Home

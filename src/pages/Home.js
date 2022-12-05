import Allcards from '../components/Allcards';
import Footer from '../components/Footer';
import Landing from '../components/Landing';



function Home() {
    return (
    <div>
    <Landing/>
    <br></br>
    <h1 style={{margin:"10px"}}> Let's go shopping! </h1>
    <br></br>
    <Allcards/>
    <Allcards/>
    <Footer/>

    

    </div>
    )
  }
  

  export default Home;
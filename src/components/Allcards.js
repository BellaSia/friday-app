import Card from './Card'
import one from '../assets/img/one.jpg';
import two from '../assets/img/two.jpg';
import three from '../assets/img/three.jpg';
import four from '../assets/img/four.jpg';


function Allcards(){
    return (
        <div style={{display: "inline-flex"}}>
            <Card prod="" text="" img={one}/>
            <Card prod="" text="" img={two}/>
            <Card prod="" text="" img={three}/>
            <Card prod="" text="" img={four}/>
            <br></br>
        </div>
    )
}
export default Allcards;



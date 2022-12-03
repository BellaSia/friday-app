import Card from './Card'
import one from '../assets/img/dress.jpg';
import two from '../assets/img/shoes.jpg';
import three from '../assets/img/mall.jpg';
import four from '../assets/img/polo.jpg';

function Allcards(){
    return (
        <div style={{display: "inline-flex"}}>
            <Card prod="" text="" img={one}/>
            <Card prod="" text="" img={two}/>
            <Card prod="" text="" img={three}/>
            <Card prod="" text="" img={four}/>
        </div>
    )
}
export default Allcards;



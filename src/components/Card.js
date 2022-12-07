import {Link} from 'react-router-dom'

    function Card(prop){
    return(
       <div>
        <br></br>
       
        <div className="card text-center " style={{width: "18rem", margin: "2px"}}>
            <img src={prop.img} className="card-img-top" alt="text"/>
            <div className="card-body">
                <h5 className="card-title">Coffee</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/" className="btn btn-success">Order now</Link>
        </div>
        </div>
        </div>
       
        
    )
}

export default Card;
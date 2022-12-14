import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coffee" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1"></path>
   <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
   <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
   <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z"></path>
   <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555"></path>
</svg> Mermaid Coffee</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/features">Order</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/pricing">Login</Link>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}



export default Navbar;
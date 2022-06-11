import React , {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/logo.png";
const Navbar = (props) => {
    let location = useLocation();
    useEffect(()=>{
        // console.log(location.pathname);
    },[location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" height={50} width={50}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li> 
                        </ul>*/}
                        <form className="" role="search">
                        <Link className="btn btn-primary mx-2" to="/login" role="button">LogIn</Link>
                        <Link className="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar

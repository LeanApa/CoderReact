import {CartWidget} from './CartWidget'
import { GiClothes } from "react-icons/gi";

export const NavBar = () => {

    return (
    <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid ">
            
            <a className="navbar-brand " href="#"><GiClothes size={45} color={"#fff"}/><span className='ps-2 text-white'>Todo Ropa</span></a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Remeras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Zapatillas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Camperas</a>
                    </li>
                </ul>
                
            </div>
            <CartWidget/>
        </div>
    </nav>
    )
}
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  const imgLogo = "../src/assets/logo.png"
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"}>
          <img className='imgLogo' src={imgLogo} alt="logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <NavLink to={"/categoria/2"}> Accesorios </NavLink>
            </li>
            <li>
              <NavLink to={"/categoria/3"}> Camisetas </NavLink>
            </li>
            
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>

  )
}

export default NavBar

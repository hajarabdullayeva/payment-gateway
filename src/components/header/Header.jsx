import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header__left">
        <div className="app__header__left__item header__logo text-light">
          Logo
        </div>
      </div>
      <div className="app__header__middle">
        <ul className="app__header__middle__items">
          <li>
            <Link to="/" className="app__header__middle__items__link">
              Home
            </Link>
          </li>
          <li>
            <Link className="app__header__middle__items__link">Pricing</Link>
          </li>
          <li>
            <Link className="app__header__middle__items__link">Tools</Link>
          </li>
          <li>
            <Link className="app__header__middle__items__link">Company</Link>
          </li>
          <li>
            <Link className="app__header__middle__items__link">Home</Link>
          </li>
          <li>
            <Link className="app__header__middle__items__link">Support</Link>
          </li>
        </ul>
      </div>
      <div className="app__header__right">
        <Link to="/login">
          <button className="app__header__right__item app__header__right__item--login">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="app__header__right__item app__header__right__item--register">
            Register
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header

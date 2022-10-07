import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header__left">
        <div className="app__header__left__item header__logo"></div>
      </div>
      <div className="app__header__middle">
        <ul className="app__header__right__items">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Pricing</Link>
          </li>
          <li>
            <Link>Tools</Link>
          </li>
          <li>
            <Link>Company</Link>
          </li>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Support</Link>
          </li>
        </ul>
      </div>
      <div className="app__header__right">
        <button className="app__header__right__item app__header__right__item--login">
          Login
        </button>
        <button className="app__header__right__item app__header__right__item--register">
          Register
        </button>
      </div>
    </div>
  )
}

export default Header

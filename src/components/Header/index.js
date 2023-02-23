import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

const Header = () => {
  const [click, setClick] = useState(false)
  const image = click
    ? 'https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png'
    : 'https://tse4.mm.bing.net/th?id=OIP.CiVQpRyvb0Sh3xxOHgKTUwAAAA&pid=Api&P=0'
  const navigate = useNavigate()
  const getClicked = () => {
    setClick(prevClick => !prevClick)
  }

  const getOut = () => {
    localStorage.removeItem('userDetails')
    navigate('/')
  }

  return (
    <>
      <div className="header-container">
        <Link to="/login" className="link">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.z_t47Ocynl_E4U8S7uy11wAAAA&pid=Api&P=0"
            className="logo"
            alt="logo"
          />
        </Link>

        <Link to="/products" className="link">
          <h1 className="header-heading">Products</h1>
        </Link>
        <Link to="/cart" className="link">
          <h1 className="header-heading">Cart</h1>
        </Link>
        <button type="button" className="logout-button" onClick={getOut}>
          Logout
        </button>
      </div>
      <div className="small-header">
        <button type="button" className="burger-icon" onClick={getClicked}>
          <img src={image} alt="burger" className="burger" />
        </button>
        <Link to="/login" className="link">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.Z2IWK3TyKUy0MVJ-bep3IAHaHa&pid=Api&P=0"
            className="main-logo"
            alt="main"
          />
        </Link>
        {click ? (
          ''
        ) : (
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.eFMDQh6CaEeUT4A-3HBVqAHaHa&pid=Api&P=0"
            alt="search"
            className="search-image"
          />
        )}
      </div>
      {click && (
        <div className="click-container">
          <Link to="/products" className="link">
            <h1 className="small-heading">Products</h1>
          </Link>
          <Link to="/cart" className="link">
            <h1 className="small-heading">Cart</h1>
          </Link>
          <div className="buttons-container">
            <button type="button" className="small-register" onClick={getOut}>
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Header

import {useState} from 'react'

import {useNavigate} from 'react-router-dom'

import './index.css'

const Login = () => {
  const [clickSign, setClick] = useState(false)
  const [clickRegister, setRegister] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useState('')
  const [error1, setError1] = useState('')
  const [error2, setError2] = useState('')
  const [error3, setError3] = useState('')
  const [loginName, setLogin] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [error4, setError4] = useState('')
  const [error5, setError5] = useState('')
  const [error6, setError6] = useState('')
  const [success, setSuccess] = useState('')

  const navigate = useNavigate()

  const changeButton = () => {
    setClick(true)
    setRegister(false)
  }

  const changeStyle = () => {
    setRegister(true)
    setClick(false)
  }

  const getName = event => {
    setName(event.target.value)
  }
  const getEmail = event => {
    setEmail(event.target.value)
  }
  const getPassword = event => {
    setPassword(event.target.value)
  }

  const getLocation = event => {
    setLocation(event.target.value)
  }

  const getRegister = event => {
    event.preventDefault()
    const object = {name, email, password, location}

    if (name === '') {
      setError1('please enter value')
    }
    if (email === '') {
      setError2('please enter value')
    }
    if (password === '') {
      setError3('please enter value')
    } else {
      const stringObject = JSON.stringify(object)
      localStorage.setItem('userDetails', stringObject)
      setSuccess('user successfully created please click on sign in')

      setError1('')
      setError2('')
      setError3('')
      setName('')
      setEmail('')
      setPassword('')
    }
  }

  const loginGetName = event => {
    setLogin(event.target.value)
  }

  const loginGetPassword = event => {
    setLoginPassword(event.target.value)
  }

  const getLogin = event => {
    event.preventDefault()

    if (loginName === '') {
      setError4('please enter value')
    }
    if (loginPassword === '') {
      setError5('please enter value')
    } else {
      const result = localStorage.getItem('userDetails')
      const parsedData = JSON.parse(result)
      setError4('')
      setError5('')
      setLogin('')
      setLoginPassword('')
      if (result === null) {
        setError6('user not existed')
      } else if (
        loginName === parsedData.email &&
        loginPassword === parsedData.password
      ) {
        navigate('/login')
      } else {
        setError6('user not existed')
      }
    }
  }

  const style = clickSign ? 'style-button' : null
  const show = clickRegister ? 'style-button' : null

  return (
    <div className="login-container">
      <div className="login-background">
        <img
          src="https://img.etb2bimg.com/files/retail_files/company/thumb_logo-Flipkart-1419592613.png"
          className="main-logo1"
          alt="main"
        />
      </div>
      <div className="form-data">
        <div>
          <button
            type="button"
            className={`login-button ${style}`}
            onClick={changeButton}
          >
            SignUp
          </button>
          <button
            type="button"
            className={`login-button ${show}`}
            onClick={changeStyle}
          >
            SignIn
          </button>
        </div>

        {style && (
          <div className="form-container">
            <form onSubmit={getRegister}>
              <input
                type="text"
                placeholder="Full name"
                className="input-value"
                onChange={getName}
                value={name}
              />
              <p className="error">{error1}</p>

              <input
                type="text"
                placeholder="Email"
                className="input-value"
                onChange={getEmail}
                value={email}
              />

              <p className="error">{error2}</p>

              <input
                type="password"
                placeholder="Password"
                className="input-value"
                onChange={getPassword}
                value={password}
              />
              <p className="error">{error3}</p>

              <select
                className="input-value1"
                onChange={getLocation}
                value={location}
              >
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
                <option value="Australia">Australia</option>
                <option value="Japan">Japan</option>
              </select>
              <br />
              <button type="submit" className="login-button1">
                SignUp
              </button>
              <p className="error">{success}</p>
            </form>
          </div>
        )}

        {show && (
          <form className="form-container" onSubmit={getLogin}>
            <input
              type="text"
              placeholder="Email"
              className="input-value"
              onChange={loginGetName}
              value={loginName}
            />
            <p className="error">{error4}</p>

            <input
              type="password"
              placeholder="Password"
              className="input-value"
              onChange={loginGetPassword}
              value={loginPassword}
            />
            <p className="error">{error5}</p>

            <button type="submit" className="login-button1">
              Sign in
            </button>
            <p className="error">{error6}</p>
          </form>
        )}
      </div>
    </div>
  )
}

export default Login

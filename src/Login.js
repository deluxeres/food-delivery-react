import './Login.css'
import logo from './images-general/logo.svg'

function Login() {
  return (
    <div className="Login">
        <div className="login-wrapper">
            <div className="login-left">
                <div className="login-container">
                  <div className="login-left-header">
                    <a href="#" className="login-logo">
                      <img src={logo} alt="logo"/>
                    </a>
                  </div>
                  <div className="login-form">
                    <span className="login-form-title">Login</span>
                    <p>Sign in with your data that you entered during your registration.</p>
                    <div className="login-email">
                        <span>Email</span>
                        <input type="email" placeholder="name@example.com"/>
                    </div>
                    <div className="login-password">
                        <span>Password</span>
                        <input type="password" placeholder="min. 8 characters"/>
                    </div>
                    <div className="login-check">
                        <input id="check" type="checkbox" />
                        <label for="check" >Keep me logged in</label>
                    </div>
                  </div>
                </div>
            </div>
            <div className="login-right">
                <div className="login-container">
                  sadsfsa
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login

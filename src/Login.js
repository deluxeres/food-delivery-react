import './Login.css'
import logo from './images-general/logo.svg'
import imgRel from './images-general/indexImg.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper"

import React, { useState } from "react";

function Login() {

    //Модальное окно востановления пароля
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
    setActive(!isActive);  };

  return (
    <div className="Login">
        <div className={isActive ? "forgot-modal" : "forgot-modal__active"}> 
            <div className="forgot-modal__content">
                <div className="forgot-modal__window">
                    <div className="forgot-modal__header">
                        <h1>Востановление пароля</h1>
                        <button type="button" className="close__modal">
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="login-wrapper">
            <div className="login-left">
                <div className="login-container">
                  <div className="login-left-header">
                    <a href="/login" className="login-logo">
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
                    <button className="login-confirm">Login</button>
                    <div className="login-rel-pass">
                        <button onClick={handleToggle} className="login-forgot">Forgot password</button>
                        <span>Don’t have an account?
                            <a href="/register" className="login-signUp">Sign Up</a>
                        </span>
                    </div>
                  </div>
                </div>
            </div>
            <div className="login-right">
                <div className="login-right-container">
                    <>
                      <Swiper pagination={true} autoplay={{delay: 5000, disableOnInteraction: false,}} modules={[Pagination, Autoplay]} className="mySwiper1">
                          <SwiperSlide>
                              <div className="img_rel">
                                  <img src={imgRel} alt="img" />
                              </div>
                            <div className="login-rel-text">
                                <span className="login-rel__title">Leave reviews for all meals</span>
                                <span className="login-rel__subtitle">
                                      Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus <br /> molestiae, eirmod assentior eum ne, et omnis antiopam mel.
                                </span>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="img_rel">
                                      <img src={imgRel} alt="img" />
                                  </div>
                                <div className="login-rel-text">
                                    <span className="login-rel__title">Leave reviews for all meals</span>
                                    <span className="login-rel__subtitle">
                                          Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus <br /> molestiae, eirmod assentior eum ne, et omnis antiopam mel.
                                    </span>
                                </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="img_rel">
                                      <img src={imgRel} alt="img" />
                                  </div>
                                <div className="login-rel-text">
                                    <span className="login-rel__title">Leave reviews for all meals</span>
                                    <span className="login-rel__subtitle">
                                          Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus <br /> molestiae, eirmod assentior eum ne, et omnis antiopam mel.
                                    </span>
                                </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="img_rel">
                                      <img src={imgRel} alt="img" />
                                  </div>
                                <div className="login-rel-text">
                                    <span className="login-rel__title">Leave reviews for all meals</span>
                                    <span className="login-rel__subtitle">
                                          Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus <br /> molestiae, eirmod assentior eum ne, et omnis antiopam mel.
                                    </span>
                                </div>
                          </SwiperSlide>
                      </Swiper>
                    </>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login

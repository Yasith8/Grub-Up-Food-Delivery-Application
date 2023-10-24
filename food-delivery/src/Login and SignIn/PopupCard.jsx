import React from 'react'
import '../Login and SignIn/Popup.css'
import pizzaBox from '../assets/pizza-box.png'

function PopupCard() {
  return (
    <div>
   <div class="container">
  <div class="cookiesContent hide" id="cookiesPopup">
    <button class="close">✖</button>
    <img src={pizzaBox} alt="cookies-img" />
    <p><b>Would you like to send you a empty pizza box?</b> <br />if you not please fill all data</p>
    <button class="accept">OK!</button>
  </div>
</div>
    </div>
  )
}

export default PopupCard
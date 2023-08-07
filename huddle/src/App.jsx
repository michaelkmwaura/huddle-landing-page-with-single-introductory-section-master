import Logo from './assets/images/logo.svg'
import bigImg from './assets/images/illustration-mockups.svg'
import fb from "./assets/images/facebook.svg"
import twitter from "./assets/images/twitter.svg"
import ig from "./assets/images/ig.svg"
import './App.css'

function App() {

  return (
    <>
      <header id="header">
        <img src={Logo} alt="logo"/>
      </header>

      <div id="maindiv">
        
        <div id="imgDiv">
          <img id="mainimg" src={bigImg} alt="bigImage"/>
        </div>

        <div id="maintext">
        <h1 id="title">Build The Community Your Fans Will Love</h1>
        
        <p id="text">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
        
        <button id="button">Register</button>
        </div>

        <div id="icons">
        <a class="icons"><img src={fb} alt="facebook"/> </a>
        <a class="icons"><img src={twitter} alt="twitter" /> </a>
        <a class="icons"><img src={ig} alt="instagram" /></a>
        </div>

      </div>
    </>
  )
}

export default App

import './App.css'
import icon from './assets/icon1.png'
import icontwo from './assets/icon2.png'
import iconthree from './assets/icon3.png'
import iconfour from './assets/icon4.png'
import ironhackLogo from './assets/ironhack-logo-xs.png'
import menuTop from './assets/menu-top-xs.png'



function App() {
  return (
  <div className='App'>
    <section className='upper-part' >
      <div className='header'>
         <img src={ironhackLogo} alt="ironhackLogo" />
         <img src={menuTop} alt="menuTop" />
      </div>
      <div className='upper-part-body'>
        <h1>Say hello to ReactJs</h1>
        <p> You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
        <button className='btn'>Awesome</button>
      </div>
    </section>
    <section className='bottom-part' >
      <div >
        <img src={icon} alt="icon1" />
        <h3>Declarative</h3>
        <p>Banana</p>
      </div>
      <div>
        <img src={icontwo} alt="icon2" />
        <h3>Components</h3>
        <p></p>
      </div>
      <div>
        <img src={iconthree} alt="icon3" />
        <h3>Single Way</h3>
        <p></p>
      </div>
      <div>
        <img src={iconfour} alt="icon4" />
        <h3>JSX</h3>
        <p></p>
      </div>
    </section>


  </div>
  )
}

export default App

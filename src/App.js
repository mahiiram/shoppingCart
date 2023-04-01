import React, {useState} from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Amazon from "./components/Amazon"
import Cart from "./components/Cart"


function App() {
  const [show,setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
const handleClick=(item)=>{
    let ispresent = false;
    cart.forEach((e)=>{
      if(item.id === e.id)
      ispresent=true;
    })
    if(ispresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },2000)
      return
    }
    setCart([...cart , item])
}
const handleChange = (item, d)=>{
    let ind = -1;
    cart.forEach((data,index)=>{
      if(data.id === item.id)
      ind = index;
    })
    const temArr = cart
    temArr[ind].amount += d
    if(temArr[ind].amount === 0)
    temArr[ind].amount = 1
    setCart([...temArr])
  
}

  return (
    <div className="App">
      <Navigation size={cart.length} setShow={setShow}/>
      {
        show?<Amazon handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      {
        warning && <div className='warning'>This item is already added</div>
      }
      
    </div>
  ); 
}

export default App;

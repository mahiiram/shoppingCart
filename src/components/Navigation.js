import React from "react";
import '../styles/navbar.css'

const Navigation = ({size,setShow}) =>{
    return(
        <div className="Navbar" >
            <span className="my-shop" onClick={()=>setShow(true)}>
                MyShopping
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
            <div>
            <span>
                <i className="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
            </div>
        </div>

        </div>
        
    )
}
export default Navigation;
import React,{useEffect, useState} from "react";
import '../styles/cart.css'



function Cart({cart,setCart, handleChange}){
    const [price,setPrice]= useState(0)

const handlePrice = ()=>{
    let ans =0;
    cart.map((item)=>{
       return ans += item.amount * item.price;
    })
    setPrice(ans)
}

const handleRemove = (id)=>{
    let arr = cart.filter((item)=> item.id !== id)
    setCart(arr)
}


useEffect(()=>{
    handlePrice()
})
    return(
        <article>
            {
                cart?.map((item,index)=>{
                   return(
                    <div className="cart" key={index}>
                     <div className="imgdiv">
                   <img src={item.img} alt="images"/>
                   <h5>{item.title}</h5>
                   </div>
                   <div>
                    <button onClick={()=>{handleChange(item, -1)}}> - </button>
                    <button>{item.amount }</button>
                    <button onClick={()=>{handleChange(item, +1)}}> + </button>
                   </div>
                   <div>
                    <span>{item.amount * item.price}</span>
                    <button onClick={()=>{handleRemove(item.id)}} >remove</button>
                   </div>
                   
                   </div>
                   )
                })
            }
            <div className="total">
                <span>Total price of your cart</span>
                <span>₹{price}</span>
            </div>
            <div className="order">
            <button className="orderbutton" >Place Order</button>
            </div>
        </article>
     )
}
export default Cart;
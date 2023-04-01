import React from "react";
import "../styles/Cards.css"


function Cards({item,handleClick}){
    const {title, author,img,price} = item;
    return (
       <div className="container">
        <div className="row">
          <div className="col">
          <div className="card">
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
          <h2>₹ {price}</h2>
          <button className="btn btn-primary" onClick={() =>handleClick(item)}>Add to Cart</button>
           </div>
         </div>
          </div>
        </div>
       </div>
        
      )
}

export default Cards;
import React from "react";
import List from '../data'
import Cards from '../components/Cards'
  

function Amazon({handleClick}){
    
    return(
        <section>
         {
            List.map((item,index)=>{
                return(
                    <Cards item= {item} key={index} handleClick={handleClick}/>
                )
            })
         }
        </section>
     )
}
export default Amazon;
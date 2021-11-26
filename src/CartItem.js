import React from 'react';



class CartItem extends React.Component{
   constructor(){
       super();
       this.state ={
           price:10000,
           title:'Phone',
           qty:1,
           img:''
       }
   }
     render(){
         const {price,title,qty} = this.state;//object destructring
         return(
            <div className="cart-item" >
               <div className="left-block">
                <img style={styles.image}/>
                 </div>
                 <div className="right-block">
                     <div style={{ fontSize:25}}>{title}</div>
                     <div style={{ color:'gray'}}>Rs{price}</div>
                     <div style={{ color:'green'}}>Qty:{qty}</div>
                      <div className="cart-item-actions">
                          {/*buttons */}
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740600.png?token=exp=1637932921~hmac=2822d17220995a194f970b2d53011ab6" alt="increase"  className="action-icons"/>
                          <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="decrease"  className="action-icons"/>
                          <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete"  className="action-icons"/>
                      </div>
                     </div> 
             </div>


         );
     }
}
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
         background:'#ccc'
    }
}
export default CartItem;
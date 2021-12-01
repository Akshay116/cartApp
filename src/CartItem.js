
import React from 'react';



const CartItem = (props) =>{
  
   
    //  increaseQuantity = () =>{
    //    // console.log('this',this.state);//arrow function binding 
    //      //setState form 1
         
    //     //  this.setState({//setsate from componenet//rendering with setState
    //     //      qty:this.state.qty +1

    //      this.setState((prevState)=>{
    //         return{
    //             qty: prevState.qty +1
    //         }
    //      });     
        
    //  }
      
    // //use this when prev state is like titile 
    // //  decreaseQuantity = () =>{
    // //      this.setState({
    // //          qty:this.state.qty -1
    // //      })
    // //  }
    //   decreaseQuantity = () =>{  
    //       //when prev state require funtion form  
    //       const {qty} =this.state;
    //       if(qty===0){
    //           return;
    //       }
    //       this.setState((prevState)=>{
    //           return{
    //             qty:prevState.qty -1
    //           }
    //       });
    //   }



    
         const {price,title,qty} = props.product;//object destructring//props from cart item 
         const {product,onIncreasQuantity,onDecreasQuantity, onDeleteProduct} = props;

         return(
            <div className="cart-item" >
               <div className="left-block">
                <img style={styles.image} src={product.img}/>
                 </div>
                 <div className="right-block">
                     <div style={{ fontSize:25}}>{title}</div>
                     <div style={{ color:'gray'}}>Rs{price}</div>
                     <div style={{ color:'green'}}>Qty:{qty}</div>
                      <div className="cart-item-actions">
                          {/*buttons */}
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740600.png?token=exp=1637932921~hmac=2822d17220995a194f970b2d53011ab6"
                            alt="increase" 
                            className="action-icons"
                            onClick={() => onIncreasQuantity(product)}
                            />
                          <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            alt="decrease" 
                             className="action-icons"
                             onClick={() => onDecreasQuantity(product)}
                           />
                          <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                          alt="delete"
                            className="action-icons"
                            onClick={() =>onDeleteProduct(product.id)}
                          
                          />
                      </div>
                     </div> 
             </div>


         );
     
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
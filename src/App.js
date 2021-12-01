import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class  App extends React.Component{
 
  constructor(){
    super();
    this.state ={
        products:[
            {
              price:99,
            title:'watch',
            qty:1,
            img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id:1

            },
            {
              price:999,
            title:'phone',
            qty:1,
            img:'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            id:2

            },
            {
              price:10000,
            title:'telev',
            qty:1,
            img:'https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
            id:3

            },


        ]
    }
   // this.increaseQuantity =this.increaseQuantity.bind(this);
}
handleIncreaseQuantity = (product) => {
    console.log('in quant', product);
    const {products} =this.state;
    const index = products.indexOf(product);

    products[index].qty +=1;
    this.setState ({
       products
    });
 }
handleDecreaseQuantity = (product) => {
    console.log('in quant', product);
    const {products} =this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0){
        return;
    }
    products[index].qty -=1;
    this.setState ({
       products
    });
 }
 handleDeleteProduct = (id) => {
     const {products} = this.state;
     const items = products.filter((item) => item.id!== id );
    
      this.setState({
          products:items
      })
 }
   getCartCount=()=>{

    const {products} = this.state;
    let count =0;
    products.forEach((product)=> {
       count += product.qty;
    });
   return count;
  
 }
 getCartTotal = () => {
  const { products } = this.state;

  let cartTotal = 0;

  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price
  })

  return cartTotal;
}
 
 
  render (){
    const {products} = this.state;
  return (
    <div className="App">
     <Navbar count = {this.getCartCount()}/>
  <Cart
  products = {products}
     onIncreasQuantity = {this.handleIncreaseQuantity}
     onDecreasQuantity = {this.handleDecreaseQuantity}
     onDeleteProduct = {this.handleDeleteProduct}
  
  />
  
  <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
    </div>
  );
}
}

export default App;

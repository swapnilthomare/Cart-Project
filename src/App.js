import React from 'react';
import react from 'react';

import Cart from './Cart';

import Navbar from './Navbar';


class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'WATCH',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80', 
                id: 1
            },
            {
                price: 999,
                title: 'Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
                id: 2
            },
            {
                price: 999,
                title: 'LAPTOP',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80',
                id: 3 
            }
        ]
    }
     //this.increaseQuantity = this.increaseQuantity.bind(this);
}
handleIncreaseQuantity = (product) => {
    console.log('hey please inc qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;


    this.setState({
        product
    })
}




// decrease quantity function

handleDecreaseQuantity = (product) => {
    console.log('hey please dec qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0){
        return;
    }
    
    products[index].qty -= 1;


    this.setState({
        product
    })
}

// delete product 


handleDeleteProduct = (id) => {
    const { products } = this.state;



    const items = products.filter((item)  => item.id !== id);

    this.setState({
        products: items
    })
}


getCartCount = () => {
    const { products } = this.state;

    let count =0;

    products.forEach((product) => {
        
        count += product.qty;
        
    });


    return count;
}

getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;


    products.map((product) => {

        cartTotal = cartTotal + product.qty * product.price;

    })

    return cartTotal;
}



  render () {
    const { products } = this.state;
    return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
      />

      <div style={ {padding: 10,fontSize : 20}}>Total: {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;

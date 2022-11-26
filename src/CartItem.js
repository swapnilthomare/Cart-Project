import React from "react";



class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: '' 
        }
         //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    // for increasing quantity
    increaseQuantity = () =>  {
        //console.log('this.state',this.state);
        //setState from 1
        //this.setState({
          //  qty: this.state.qty +1
        //});

        //if Previous state require use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty +1
        }
    });

}

decreaseQuantity = () =>  {
    const { qty }  = this.state;
    if (qty === 0) {
        return;
    }
    
    this.setState((prevState) => {
        return {
            qty: prevState.qty - 1
    }
});

}

deleteQuantity = () =>  {
    this.setState({
        qty: this.state.qty = 0
    });

}
      



    render () {
        const {price,title,qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontsize: 24}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty {qty}</div>
                    <div className="cart-item-actions">
                        {/*Button*/}
                        <img 
                            alt='increase' 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
                            onClick={this.increaseQuantity}
                            
                         />
                        <img 
                            alt='decrease' 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                            onClick={this.decreaseQuantity}
                            
                            
                        />
                        <img 
                            alt='delete' 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                            onClick={this.deleteQuantity}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
        height : 100,
        width  : 110,
        borderRadius : 4,
        background: '#ccc'
    }
}
    


export default CartItem;


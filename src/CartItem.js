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
    increaseQuantity = () =>  {
        console.log('this.state',this.state);
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
                            src="https://t4.ftcdn.net/jpg/03/16/59/73/240_F_316597363_G8dPZwXqbsq9vs7uiomI9gIlwdT7sywy.jpg"
                            onClick={this.increaseQuantity}
                         />
                        <img 
                            alt='decrease' 
                            className="action-icons" 
                            src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                        />
                        <img 
                            alt='delete' 
                            className="action-icons" 
                            src="https://as1.ftcdn.net/v2/jpg/02/58/95/14/1000_F_258951445_Md7JDFw3Qj4LPTorWUYdImTzS49fSnOf.jpg" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;

const styles = {
    image : {
        height : 100,
        width  : 110,
        borderRadius : 4,
        background: '#ccc'
    }
}
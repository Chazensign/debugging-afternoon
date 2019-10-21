import React, { Component } from "react";
import "./ShoppingCart.css";

class ShoppingCart extends Component {
  render() {
    console.log(this.props.cart)
    let shoppingCartDisplay = this.props.cart.map((element, index) => {
      return (
        <div className="shopping-cart-product-container" key={index}>
          <h2>{element.title}</h2>
          <img src={element.image} alt="" />
          <div className="shopping-cart-info">
            <h2>{element.desc}</h2>
            <h2>{"$" + element.price + ".00"}</h2>
            <div className="shopping-cart-button-container">
              <button
                id={index}
                className="shopping-cart-button"
                onClick={event => this.props.removeFromCart(event.target.id)}
              >
                Remove From Shopping Cart
              </button>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="shopping-cart-container">
        {shoppingCartDisplay[0] ? (
          shoppingCartDisplay
        ) : (
          <div className="go-buy-something">
            <h1>Your shopping cart is empty! Go buy something!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingCart;

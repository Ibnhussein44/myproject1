import React, { useContext, useEffect, useState } from 'react';
import './Purchase.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { CartContext } from '../Pages/CartContext'; // Adjust the path as needed

const Purchase = () => {
  const { cartItems, updateQuantity } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateCartTotal();
  }, [cartItems]);

  const updateCartTotal = () => {
    const total = cartItems.reduce((sum, item) => {
      return sum + (parseFloat(item.price.replace('TZS ', '')) * item.quantity);
    }, 0);
    setTotal(Math.round(total * 100) / 100);
  };

  return (
    <div>
      <h2>PAYMENT CHECKOUT</h2>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="#">
              <div className="row">
                <div className="col-50">
                  <h3>Payment Details</h3>
                  <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                  <input type="text" id="fname" name="firstname" required />
                  <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                  <input type="text" id="email" name="email" placeholder="" required />
                  <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                  <input type="text" id="adr" name="address" placeholder="" required />
                  <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                  <input type="text" id="city" name="city" placeholder="" required />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input type="text" id="state" name="state" placeholder="" required />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip</label>
                      <input type="text" id="zip" name="zip" placeholder="" required />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                    <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                    <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                    <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" placeholder="" required />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="" required />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="" required />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" placeholder="" required />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="" required />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="col-25">
        <Link to="/Dashboard" className="btn">Return to Dashboard</Link>
      </div>
    </div>
  );
};

export default Purchase;

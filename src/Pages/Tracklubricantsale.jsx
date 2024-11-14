import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

const Tracklubricantsale = () => {
  // Full list of products data
  const productsData = [
    { id: 1, name: '2T MAK OIL 20ml', sku: '7267655', price: 2415.00, stock: 9955, gst: 16, image: '/images/2k mak.jpg' },
    { id: 2, name: '2T MAK OIL 40ml', sku: '2T MAK OIL 40ml', price: 15.00, stock: 10000, gst: 16, image: '/images/product2.png' },
    // Add other products here...
  ];

  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('products');
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [customerDetails, setCustomerDetails] = useState({ name: '', phone: '' });
  const [discount, setDiscount] = useState(0);
  const [paymentMode, setPaymentMode] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  // Function to handle Add to Cart
  const handleAddToCart = (product, quantity) => {
    if (quantity > 0 && quantity <= product.stock) {
      setCartCount(prevCount => prevCount + quantity);
      setCartItems(prevItems => [
        ...prevItems,
        { ...product, quantity }
      ]);
    } else {
      alert('Please select a valid quantity.');
    }
  };

  // Function to handle item removal from cart
  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    setCartCount(updatedCartItems.reduce((count, item) => count + item.quantity, 0));
  };

  // Filter products based on search query
  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle Proceed to Checkout
  const handleProceedToCheckout = () => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setOrderDetails({
      items: cartItems,
      totalAmount,
      grandTotal: totalAmount - discount,
    });
    setShowCheckout(true);
  };

  // Handle Order Submission
  const handleSubmitOrder = () => {
    const orderId = 'ORD-' + Math.floor(Math.random() * 1000000); // Generating a random Order ID
    setOrderId(orderId);
    alert('Order Created Successfully! Order ID: ' + orderId);
    setShowCheckout(false);
    setCartItems([]); // Empty the cart after order creation
    setCartCount(0);
  };

  // Handle Cancel Checkout
  const handleCancelCheckout = () => {
    setShowWarning(true);
  };

  // Handle Confirm Cancel
  const handleConfirmCancel = () => {
    setShowCheckout(false);
    setShowWarning(false);
  };

  // Filtered list of products in the cart
  const cartProductList = cartItems.map(item => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
      <td>{item.gst}%</td>
      <td>
        <button onClick={() => handleRemoveFromCart(item.id)} className="remove-btn">
          <FaTimes />
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Header />
      <div className="tracklubricantsale">
        <div className="main-content">
          {/* Tabs for Products and Invoices */}
          <div className="tab">
            <div className="tabs">
              <button
                onClick={() => setActiveTab('products')}
                className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('invoices')}
                className={`tab-btn ${activeTab === 'invoices' ? 'active' : ''}`}
              >
                Invoices
              </button>
            </div>
            {/* Search Box inside the same div */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-box"
              />
            </div>
          </div>

          {/* Content based on Active Tab */}
          {activeTab === 'products' && (
            <div className="products-section">
              <div className='cart'>
                <div className="cart-icon" onClick={handleProceedToCheckout}>
                  <FaShoppingCart size={30} />
                  <span>{cartCount}</span>
                </div>
                <button
                  className={`proceed-btn ${cartCount === 0 ? 'disabled' : ''}`}
                  onClick={handleProceedToCheckout}
                  disabled={cartCount === 0}
                >
                  Proceed to Checkout
                </button>
              </div>
              {/* Product List */}
              <div className="product-list">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-item">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="details">
                      <div className="product-details">
                        <h5>{product.name}</h5>
                        <p>SKU: {product.sku}</p>
                        <p>Price: ₹{product.price}</p>
                        <p>Stock: {product.stock}</p>
                        <p>GST: {product.gst}%</p>
                      </div>
                      </div>
                      <div className="qty-input">
                        <input
                          type="number"
                          min="1"
                          max={product.stock}
                          defaultValue="1"
                          id={`qty-${product.id}`}
                          className="quantity-input"
                        />
                      </div>
                    
                    <div className="add-to-cart">
                      <button
                        onClick={() => handleAddToCart(product, parseInt(document.getElementById(`qty-${product.id}`).value))}
                        className="add-to-cart-btn"
                        disabled={product.stock <= 0}
                      >
                        Add to Cart
                      </button>
                      <button className="remove-product-btn" onClick={() => handleRemoveFromCart(product.id)}>
                        <FaTimes />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'invoices' && (
            <div className="invoices-section">
              <h4>Invoices</h4>
              <table>
                <thead>
                  <tr>
                    <th>Invoice Name</th>
                    <th>Total</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Invoice #1234</td>
                    <td>₹1000</td>
                    <td>2024-11-05</td>
                    <td>
                      <button className="btn btn-primary">Print</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Checkout Modal */}
          {showCheckout && (
            <div className="checkout-modal">
              <h3>Order Summary</h3>
              <form>
                <label>Customer Name:</label>
                <input
                  type="text"
                  value={customerDetails.name}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                  placeholder="Enter your name"
                />
                <label>Customer Phone:</label>
                <input
                  type="text"
                  value={customerDetails.phone}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                  placeholder="Enter your phone number"
                />

                <h4>Order Details</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>GST</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProductList}
                  </tbody>
                </table>

                <p>Total Amount: ₹{orderDetails?.totalAmount || 0}</p>
                <p>Grand Total: ₹{orderDetails?.grandTotal || 0}</p>
                <label>Discount Amount: </label>
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(parseFloat(e.target.value))}
                  min="0"
                />
                <label>Payment Mode</label>
                <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
                  <option value="">Select Mode</option>
                  <option value="Credit">Credit</option>
                  <option value="Debit">Debit</option>
                  <option value="Cash">Cash</option>
                </select>

                <div className="checkout-buttons">
                  <button type="button" onClick={handleSubmitOrder}>Submit</button>
                  <button type="button" onClick={handleCancelCheckout}>Cancel</button>
                </div>
              </form>
            </div>
          )}

          {/* Cancel Warning Modal */}
          {showWarning && (
            <div className="warning-modal">
              <p>Are you sure you want to cancel the order?</p>
              <button onClick={handleConfirmCancel}>Yes, Cancel</button>
              <button onClick={() => setShowWarning(false)}>No, Keep it</button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .checkout-modal, .warning-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }
        .checkout-modal form, .warning-modal {
          background-color: #333;
          padding: 20px;
          border-radius: 8px;
          max-width: 500px;
          width: 100%;
        }
        .checkout-modal table {
          width: 100%;
          margin-top: 10px;
        }
        .checkout-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        .cart {
          display: flex;
          justify-content:flex-end;
          gap: 20px;
        }
        .cart-icon {
          font-size: 24px;
          position: relative;
        }
        .cart-icon span {
          position: absolute;
          top: -16px;
          right: -16px;
          background-color: red;
          color: white;
          border-radius: 70%;
          padding: 4px;
        }
        .proceed-btn {
          background-color: darkblue;
          color: white;
          padding: 10px 20px;
          cursor: pointer;
          border: none;
          margin-bottom: 20px;
        }
        .proceed-btn.disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        .proceed-btn:hover:not(.disabled) {
          background-color: #0056b3;
        }
        .tab-btn {
          padding: 10px 20px;
          margin-right: 10px;
          cursor: pointer;
          background-color: darkblue;
          color: white;
          border: none;

        }
        .tab-btn.active {
          background-color: #0056b3;
        }
        .tab {
          display: flex;
          justify-content: space-between;
        }
        .tabs {
          display: flex;
          margin-bottom: 20px;
        }
        .main-content {
          flex-grow: 1;
          padding: 20px;
        }
        .search-container {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 20px;
        }
        .search-box {
              width: 430px !important;
    border: solid 2px darkblue;
    border-radius: 20px;
    font-size: 20px;
        }
        .product-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .product-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #ddd;
          padding: 10px;
          background-color: #f9f9f9;
        }
        .product-image {
          width: 20%;
          overflow: hidden;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-details {
          flex-grow: 1;
          padding: 0 20px;
        }
        .quantity-input {
          width: 75px;
          margin-top: 10px;
          padding: 5px;
          text-align:center;
          font-size:30px;
          border:solid 1px;
        }
        .add-to-cart-btn {
          align-items: center;
    background-color: darkblue;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 20px;
    height: 58px;
    width: 200px;
    font-size: 27px;
    display: flex;
    justify-content: center;
    font-family:Verdana, Geneva, Tahoma, sans-serif !important;
        }
        .remove-product-btn {
          background: none;
          border: none;
          color: black;
          cursor: pointer;
          font-size: 18px;
        }
        .invoices-section table {
          width: 100%;
          border-collapse: collapse;
        }
        .invoices-section table th, .invoices-section table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: center;
        }
        .btn-primary {
          background-color: blue;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
        }
        .remove-btn {
          background: none;
          border: none;
          color: red;
          cursor: pointer;
          font-size: 18px;
        }
          .details{
          display:flex;
          align-items:center;
          }
          .add-to-cart{
          display:flex;
          align-items:center;
          }
           .tab-btn {
          padding: 10px 20px;
          margin-right: 10px;
          cursor: pointer;
          background-color: ${activeTab === 'products' ? 'darkblue' : 'lightgrey'};
          color: white;
          border: none;
          font-size:18px;
          font-family:Verdana, Geneva, Tahoma, sans-serif !important;
          border-radius:20px;
        }
        .tab-btn.active {
          background-color: darkblue;
        }
        .tab {
          display: flex;
          justify-content: space-between;
        }
        .tabs {
          display: flex;
          margin-bottom: 20px;
        }
        .search-container {
          display: flex;
          align-items: center;
          margin-left: 10px;
        }
        .search-box {
          width: 250px;
          padding: 10px;
        }
        .product-details h5{
        font-size:28px;
        color:darkblue;
        font-family:Verdana, Geneva, Tahoma, sans-serif !important;
        }
        .product-details p{
        font-size:28px;
        color:grey;
        font-family:Verdana, Geneva, Tahoma, sans-serif !important;
        }
      `}
      </style>
    </div>
  );
};

export default Tracklubricantsale;

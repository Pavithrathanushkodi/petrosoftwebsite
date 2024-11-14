import React, { useState } from 'react';
import './CustomerPage.css'; // Add the appropriate styles for modal and table
import Header from '../Components/Header/Header';

const CustomerPage = () => {
  // Sample customer data
  const [customers, setCustomers] = useState([
    { id: 1, name: 'SM BEEVI', creditLimit: '₹0.00', phone: 'VKN', email: 'vkn@example.com' },
  ]);

  // State to control modal visibility and data
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false); // Flag to determine if it's an edit or add operation
  const [formData, setFormData] = useState({
    id: null,
    businessUnit: 'SM Sons',  // Predefined business unit
    customerName: '',
    phone: '',
    email: '',
    creditLimit: '₹0.00',
    vehicleNumber: '',
    street: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
  });

  // Function to open modal for add or edit
  const handleModalOpen = (customer = null) => {
    if (customer) {
      // Editing an existing customer
      setIsEdit(true);
      setFormData({ ...customer });
    } else {
      // Adding a new customer
      setIsEdit(false);
      setFormData({
        id: null,
        businessUnit: 'SM Sons',  // Default business unit
        customerName: '',
        phone: '',
        email: '',
        creditLimit: '₹0.00',
        vehicleNumber: '',
        street: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
      });
    }
    setShowModal(true);  // Open the modal
  };

  // Function to handle closing the modal
  const handleModalClose = () => {
    setShowModal(false);
    setIsEdit(false);  // Reset the edit flag
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Save or Update action
  const handleSaveOrUpdate = () => {
    if (isEdit) {
      // Update existing customer
      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === formData.id ? { ...customer, ...formData } : customer
        )
      );
    } else {
      // Add new customer
      setCustomers((prev) => [
        ...prev,
        { ...formData, id: customers.length + 1 },  // New customer with an auto-incremented ID
      ]);
    }
    handleModalClose();  // Close the modal after saving
  };

  return (
    <>
      <Header />
      <div className="customer-page-container">
        <h1>Customer Management</h1>

        {/* Add New Customer Button */}
        <button onClick={() => handleModalOpen()} className="customer-btn">
          Add New Customer
        </button>

        {/* Customer Table */}
        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Credit Limit</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.customerName}</td>
                <td>{customer.creditLimit}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>
                  <button
                    onClick={() => handleModalOpen(customer)}  // Open modal in edit mode
                    className="edit-btn"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for Add/Edit Customer */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>{isEdit ? 'Edit Customer' : 'Add New Customer'}</h2>

              {/* Customer Form */}
              <div className="form-group">
                <label>*Business Unit</label>
                <input
                  type="text"
                  name="businessUnit"
                  value={formData.businessUnit}
                  onChange={handleChange}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>*Customer Name</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Credit Limit</label>
                <input
                  type="number"
                  name="creditLimit"
                  value={formData.creditLimit}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Vehicle Number</label>
                <input
                  type="text"
                  name="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Street</label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>

              <div className="modal-actions">
                <button onClick={handleSaveOrUpdate} className="update-btn">
                  {isEdit ? 'Update' : 'Save'}
                </button>
                <button onClick={handleModalClose} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerPage;

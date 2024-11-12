import React, { useState } from 'react';

const AddStockModal = ({ isOpen, onClose }) => {
  const [product, setProduct] = useState('');
  const [tank, setTank] = useState('');
  const [beforeDipValue, setBeforeDipValue] = useState('');
  const [quantityAdded, setQuantityAdded] = useState('');
  const [afterDipValue, setAfterDipValue] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState('');

  const [currentStep, setCurrentStep] = useState(1);

  const handleProductChange = (e) => setProduct(e.target.value);
  const handleTankChange = (e) => setTank(e.target.value);
  const handleBeforeDipValueChange = (e) => setBeforeDipValue(e.target.value);
  const handleQuantityAddedChange = (e) => setQuantityAdded(e.target.value);
  const handleAfterDipValueChange = (e) => setAfterDipValue(e.target.value);
  const handleCurrentQuantityChange = (e) => setCurrentQuantity(e.target.value);

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      product,
      tank,
      beforeDipValue,
      quantityAdded,
      afterDipValue,
      currentQuantity,
    });
    onClose(); // Close modal or handle the final submission
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>Add Stock</h3>
      </div>
      <div className="card-body">
        {/* First Step */}
        {currentStep === 1 && (
          <div>
            <h4>Select Product and Tank</h4>
            <div className="form-group">
              <label>Select Product</label>
              <select
                className="form-control"
                value={product}
                onChange={handleProductChange}
              >
                <option value="">-- Select Product --</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
              </select>
            </div>
            <div className="form-group">
              <label>Select Tank</label>
              <select
                className="form-control"
                value={tank}
                onChange={handleTankChange}
              >
                <option value="">-- Select Tank --</option>
                <option value="Tank 1">Tank 1</option>
                <option value="Tank 2">Tank 2</option>
              </select>
            </div>
            <div className="form-group">
              <label>Before Dip Value</label>
              <input
                className="form-control"
                type="number"
                value={beforeDipValue}
                onChange={handleBeforeDipValueChange}
              />
            </div>
            <div className="form-group">
              <label>Quantity Added</label>
              <input
                className="form-control"
                type="number"
                value={quantityAdded}
                onChange={handleQuantityAddedChange}
              />
            </div>
            <div className="form-group text-right">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Second Step */}
        {currentStep === 2 && (
          <div>
            <h4>Enter After Dip Value and Save</h4>
            <div className="form-group">
              <label>After Dip Value</label>
              <input
                className="form-control"
                type="number"
                value={afterDipValue}
                onChange={handleAfterDipValueChange}
              />
            </div>
            <div className="form-group">
              <label>Current Quantity</label>
              <input
                className="form-control"
                type="number"
                value={currentQuantity}
                onChange={handleCurrentQuantityChange}
                disabled
              />
            </div>
            <div className="form-group text-right">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handlePreviousStep}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddStockModal;

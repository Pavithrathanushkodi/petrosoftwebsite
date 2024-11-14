// import React, { useState } from 'react';

// const TankReport = () => {
//   const [dieselCapacity, setDieselCapacity] = useState(20000);
//   const [dieselStock, setDieselStock] = useState(11947.91);
//   const [petrolCapacity, setPetrolCapacity] = useState(20000);
//   const [petrolStock, setPetrolStock] = useState(17720.41);

//   // Calculate percentages
//   const dieselPercentage = (dieselStock / dieselCapacity) * 100;
//   const petrolPercentage = (petrolStock / petrolCapacity) * 100;

//   return (
//     <div className="tank-report">
//       <h4>Tank Report</h4>
//       <div className="tank-report1">
//         {/* Diesel Tank Card */}
//         <div className="tank diesel-tank card">
//           <h5>Diesel Tank</h5>
//           <div className="card-content">
//             <div className="progress-container">
//               <p><strong>Capacity:</strong> {dieselCapacity} Liters</p>
//               <p><strong>Min Capacity:</strong> 2,000 Liters</p>
//               <p><strong>Available Stock:</strong> {dieselStock} Liters</p>
//               <div className="progress">
//                 <div className="progress-bar" style={{ width: `${dieselPercentage}%` }}></div>
//               </div>
//               <p>Fuel: {dieselPercentage.toFixed(2)}%</p>
//             </div>
//           </div>
//         </div>

//         {/* Petrol Tank Card */}
//         <div className="tank petrol-tank card">
//           <h5>Petrol Tank</h5>
//           <div className="card-content">
//             <div className="progress-container">
//               <p><strong>Capacity:</strong> {petrolCapacity} Liters</p>
//               <p><strong>Min Capacity:</strong> 2,000 Liters</p>
//               <p><strong>Available Stock:</strong> {petrolStock} Liters</p>
//               <div className="progress">
//                 <div className="progress-bar" style={{ width: `${petrolPercentage}%` }}></div>
//               </div>
//               <p>Fuel: {petrolPercentage.toFixed(2)}%</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TankReport;

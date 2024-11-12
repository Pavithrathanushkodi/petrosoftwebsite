import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 


// import { useLoading } from './context/LoadingContext';  // Import the custom hook
import './App.css';
import Home from './Pages/Home';
import TrackPetrolSale from './Pages/TrackPetrolsale';
import TrackLubricantSale from './Pages/Tracklubricantsale';
import CashClosure from './Pages/Cashclosure';
import Customer from './Pages/Customer';
import DailySalesEntry from './Pages/Dailysalesentry';
import CreditManagement from './Pages/CreditManagement';

// import { LoadingProvider } from './context/LoadingContext';  // Import the LoadingProvider
// import GlobalLoader from './Components/GlobalLoader';

function App() {
  // const { startLoading, stopLoading } = useLoading();  // Destructure from the useLoading hook
  // const location = useLocation();

  // useEffect(() => {
  //   startLoading();  // Start loading when the page changes

  //   // Stop loading after the new page is rendered
  //   const timer = setTimeout(() => {
  //     stopLoading();
  //   }, 1000);  // Adjust the time as needed

  //   return () => clearTimeout(timer);
  // }, [location, startLoading, stopLoading]);

  return (
    // <LoadingProvider>  {/* LoadingProvider should wrap the entire app */}
    //   <GlobalLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trackpetrolsale" element={<TrackPetrolSale />} />
        <Route path="/tracklubricantsale" element={<TrackLubricantSale />} />
        <Route path="/cashclosure" element={<CashClosure />} />
        <Route path="/CreditManagement" element={<CreditManagement/>} />
        
        <Route path="/customer" element={<Customer />} />
        <Route path="/dailysalesentry" element={<DailySalesEntry />} />
      </Routes>
    // </LoadingProvider>
  );
}

export default App;

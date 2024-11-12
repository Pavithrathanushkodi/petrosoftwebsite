// src/components/GlobalLoader.js
import React from 'react';
import { useLoading } from '../context/LoadingContext';  // Correct import path
import { ClipLoader } from 'react-spinners';  // You can use any loader

const GlobalLoader = () => {
  const { isLoading } = useLoading();  // Correct usage of the useLoading hook

  if (!isLoading) return null;  // Do not render the loader if not loading

  return (
    <div className="loader-container">
      <ClipLoader size={150} color="#123abc" loading={isLoading} />
    </div>
  );
};

export default GlobalLoader;

// src/components/AppLoader.js
import React from 'react';
import { useLoading } from '../context/LoadingContext'; // Using the loading context for state

import './styles/AppLoader.css';// Styles for the loader

const AppLoader = () => {
  const { isLoading } = useLoading(); // Get loading state from context

  if (!isLoading) return null; // Don't show the loader if not loading

  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default AppLoader;

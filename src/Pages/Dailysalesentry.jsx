import React, { useState } from 'react';
import './DailySalesEntry.css'
import Table from './Table';
import EditModal from './EditModal';
import Header from '../Components/Header/Header';

const DailySalesEntry = () => {
  // Sample sales data
  const salesData = [
    { name: 'DST-8-8-2024', totalAmount: 364353.44, status: 'Active', closedDate: '8/8/2024' },
    { name: 'DST-7-8-2024', totalAmount: 418842.66, status: 'Close', closedDate: '7/8/2024' },
    { name: 'DST-6-8-2024', totalAmount: 421890.02, status: 'Close', closedDate: '6/8/2024' },
    { name: 'DST-5-8-2024', totalAmount: 326112.84, status: 'Close', closedDate: '5/8/2024' },
    { name: 'DST-4-8-2024', totalAmount: 390228.15, status: 'Close', closedDate: '4/8/2024' },
    { name: 'DST-3-8-2024', totalAmount: 480064.39, status: 'Close', closedDate: '3/8/2024' },
    { name: 'DST-2-8-2024', totalAmount: 462186.05, status: 'Close', closedDate: '2/8/2024' },
    { name: 'DST-1-8-2024', totalAmount: 418097.71, status: 'Close', closedDate: '1/8/2024' },
    { name: 'DST-31-7-2024', totalAmount: 463065.07, status: 'Close', closedDate: '31/7/2024' },
    { name: 'DST-30-7-2024', totalAmount: 417357.7, status: 'Close', closedDate: '30/7/2024' },
  ];

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  // Edit modal state
  const [editingEntry, setEditingEntry] = useState(null);

  // Function to display the data on the current page
  const paginate = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = currentPage * recordsPerPage;
    return salesData.slice(startIndex, endIndex);
  };

  // Handle pagination change
  const handlePageChange = (direction) => {
    setCurrentPage(currentPage + direction);
  };

  return (
    <div>
      <Header/>
      <h1>Daily Sales Entry</h1>

      {/* Table Component */}
      <Table
        salesData={paginate()}
        onEdit={setEditingEntry}
        currentPage={currentPage}
        recordsPerPage={recordsPerPage}
      />

      {/* Edit Modal */}
      {editingEntry && (
        <EditModal
          entry={editingEntry}
          onClose={() => setEditingEntry(null)}
          onSave={(updatedEntry) => {
            salesData[editingEntry.index] = updatedEntry;
            setEditingEntry(null);
          }}
        />
      )}

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => handlePageChange(-1)} disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={() => handlePageChange(1)} disabled={currentPage * recordsPerPage >= salesData.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DailySalesEntry;

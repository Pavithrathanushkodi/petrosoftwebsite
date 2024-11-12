import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const Table = ({ salesData, onEdit }) => {
  // Function to generate PDF for an individual row
  const handleDownloadRowPDF = (row) => {
    const doc = new jsPDF();
    doc.text('Sales Entry', 10, 10);
    doc.autoTable({
      head: [['Name', 'Total Amount', 'Status', 'Closed Date']],
      body: [
        [row.name, row.totalAmount, row.status, row.closedDate],
      ],
    });
    doc.save(`${row.name}_daily_sales.pdf`);
  };

  return (
    <table id="salesTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Total Amount</th>
          <th>Status</th>
          <th>Closed Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((entry, index) => (
          <tr key={index}>
            <td>{entry.name}</td>
            <td>{entry.totalAmount}</td>
            <td>{entry.status}</td>
            <td>{entry.closedDate}</td>
            <td>
              {/* Edit Button */}
              <button onClick={() => onEdit({ ...entry, index })}>Edit</button>

              {/* Download PDF Button for Each Row */}
              <button onClick={() => handleDownloadRowPDF(entry)}>Download PDF</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

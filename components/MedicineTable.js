// components/MedicineTable.js
import React from 'react';

const MedicineTable = () => {
  const medicines = [
    { name: 'Paracetamol', qty: '1', when: 'Morning', instruction: 'After meal' },
    { name: 'Ibuprofen', qty: '2', when: 'Evening', instruction: 'Before meal' },
    { name: 'Amoxicillin', qty: '1', when: 'Afternoon', instruction: 'After meal with water' },
    // Add more medicines as needed
  ];

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.th}>Medicine Name</th>
            <th style={styles.th}>Qty to Take</th>
            <th style={styles.th}>When to Take</th>
            <th style={styles.th}>Instruction</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={index} style={styles.tr}>
              <td style={styles.td}>{medicine.name}</td>
              <td style={styles.td}>{medicine.qty}</td>
              <td style={styles.td}>{medicine.when}</td>
              <td style={styles.td}>{medicine.instruction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
  },
  tr: {
    backgroundColor: '#fff',
  },
};

export default MedicineTable;

import React, { useState } from 'react';
import Table from './components/Table';
import Popup from './components/Popup';

function App() {

  const initialData = [
    { id: 'ezest1', name: 'John', sno: 1, designation: 'HR', description: 'HR Manager', doj: '01/01/2023'},
    { id: 'ezest2', name: 'Avi', sno: 2, designation: 'Full Stack', description: 'Developer', doj: '01/01/2023' },
    { id: 'ezest3', name: 'Akshay', sno: 3, designation: 'UI/UX', description: 'Developer', doj: '01/01/2023' },
    { id: 'ezest4', name: 'Aditi', sno: 4, designation: 'React', description: 'Developer', doj: '01/01/2023' },
    { id: 'ezest5', name: 'Arpi', sno: 5, designation: 'React', description: 'Developer', doj: '01/01/2023' },
    { id: 'ezest6', name: 'Shubham', sno: 6, designation: 'Node', description: 'Developer', doj: '01/01/2023' },
  ]; 
  const [data, setData] = useState(initialData);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [newRow, setnewRow] = useState(false);
  const [oldRow, setoldRow] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const handleNew = () => {
    openPopup();
    setnewRow(true);
  }
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedRow({});
    setErrorMessages({});
  };

  const handleEdit = (row) => {
    setSelectedRow(row);
    setoldRow(true);
    openPopup();
  };

  const handleSave = (updatedRow) => {
    if (!updatedRow.name || !updatedRow.doj || !updatedRow.designation) {
      setErrorMessages({ requiredFields: 'All fields are mandatory.' });
      return;
    }

    const arr = data;
    let updatedData;
    

    if(oldRow){
      updatedData = data.map((row) =>
      row.id === updatedRow.id ? { ...row, ...updatedRow } : row);
    }else{
      const tempObj = { "id": "ezest" + (data.length+1), 
      "name": updatedRow.name, 
      "sno": (data.length+1), 
      "designation": updatedRow.designation, 
      "description": updatedRow.description ? updatedRow.description : '', 
      "doj": updatedRow.doj
    }

      arr.push(tempObj)
      updatedData = arr;
    }
    

    setData(updatedData);
    setSuccessMessage('Record updated successfully.');
    closePopup();
  };

  return (
    <div>
      <h1>Dynamic Table</h1>
      <button onClick={handleNew}>Add New Row</button>
      <Table data={data} onEdit={handleEdit} />
      {isPopupOpen && (
        <Popup
          data={selectedRow}
          onSave={handleSave}
          onCancel={closePopup}
          errorMessages={errorMessages}
        />
      )}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default App;

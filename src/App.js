import React, { useState } from 'react';
import Table from './components/Table';
import Popup from './components/Popup';

function App() {

  const initialData = [
    { id: 'ezest1', name: 'Sagar', sno: 1, designation: 'HR', description: 'HR Manager', doj: '01/01/2023'},
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
  const [showName, setshowName] = useState(true)
  const [showSrno, setshowSrno] = useState(true)
  const [showEpid, setshowEpid] = useState(true)
  const [showDescription, setshowDescription] = useState(true)
  const [showDesignation, setshowDesignation] = useState(true)
  const [showDoj, setshowDoj] = useState(true)
  const [showEdit, setshowEdit] = useState(true)
  const [showColumn, setshowColumn] = useState(false)


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

  const handleColumn = () => {
    setshowColumn(!showColumn)
  }

  const handleEdit = (row) => {
    setSelectedRow(row);
    setoldRow(true);
    openPopup();
  };

  const handleSrno = () => {
    setshowSrno(!showSrno);
  }

  const handleName = () => {
    setshowName(!showName)
  }

  const handleEmip = () => {
    setshowEpid(!showEpid)
  }

  const handleDesignation = () => {
    setshowDesignation(!showDesignation)
  }

  const handleDescription = () => {
    setshowDescription(!showDescription);
  }

  const handleDoj = () => {
    setshowDoj(!showDoj)
  }

  const handleShowEdit = () => {
    setshowEdit(!showEdit);
  }

  const handleSave = (updatedRow) => {
    if (!updatedRow.name || !updatedRow.doj || !updatedRow.designation) {
      setErrorMessages({ requiredFields: 'Except Description All fields are mandatory.' });
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
      <button onClick={handleColumn}>Column Filter</button>
      {
        showColumn ? <div>
          <button onClick={handleSrno}>SrNo</button>
          <button onClick={handleName}>Name</button>
          <button onClick={handleEmip}>Empid</button>
          <button onClick={handleDesignation}>Designation</button>
          <button onClick={handleDescription}>Description</button>
          <button onClick={handleDoj}>Date of Joining</button>
          <button onClick={handleShowEdit}>Edit</button>
        </div>: ''
      }
      <Table data={data} onEdit={handleEdit} 
      showSrno={showSrno}
      showName={showName}
      showEpid={showEpid}
      showDoj={showDoj}
      showDesignation={showDesignation}
      showDescription={showDescription}
      showEdit={showEdit}
      
      
      
      />
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

import React, { useState } from 'react';

function Popup({ data, onSave, onCancel, errorMessages }) {
  const [row, setRow] = useState(data);

  const handleChange = (e) => {
    setRow({ ...row, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(row);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{data.id ? 'Edit Row' : 'Add New Row'}</h2>
        <input
          type="text"
          name="name"
          value={row.name}
          onChange={handleChange}
          placeholder="Name"
        /><br></br>
        <input
          type="text"
          name="designation"
          value={row.designation}
          onChange={handleChange}
          placeholder="Designation"
        /><br></br>
        <input
          type="text"
          name="description"
          value={row.description}
          onChange={handleChange}
          placeholder="Description"
        /><br></br>
        <input
          type="text"
          name="doj"
          value={row.doj}
          onChange={handleChange}
          placeholder="Date of joining"
        /><br></br>
        {errorMessages.requiredFields && (
          <p className="error">{errorMessages.requiredFields}</p>
        )}
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default Popup;

import React from 'react';

function Table({ data, onEdit }) {
  return (
    <table>
      <thead>
        <tr>
        <th>Srno</th>
          <th>Name</th>
          <th>Emp id</th>
          <th>Designation</th>
          <th>Description</th>
          <th>Date of joining</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.sno}</td>
            <td>{row.name}</td>
            <td>{row.id}</td>
            <td>{row.designation}</td>
            <td>{row.description}</td>
            <td>{row.doj}</td>
            <td>
              <button onClick={() => onEdit(row)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
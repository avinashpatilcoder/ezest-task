import React from "react";

function Table({
  data,
  onEdit,
  showSrno,
  showName,
  showDescription,
  showDesignation,
  showDoj,
  showEpid,
  showEdit,
}) {
  return (
    <table>
      <thead>
        <tr>
          {showSrno ? <th>Srno</th> : ""}
          {showName ? <th>Name</th> : ""}
          {showEpid ? <th>Emp id</th> : ""}
          {showDesignation ? <th>Designation</th> : ""}
          {showDescription ? <th>Description</th> : ""}
          {showDoj ? <th>Date of joining</th> : ""}
          {showEdit ? <th>Edit</th> : ""}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {showSrno ? <td>{row.sno}</td> : ""}
            {showName ? <td>{row.name}</td> : ""}
            {showEpid ? <td>{row.id}</td> : ""}
            {showDesignation ? <td>{row.designation}</td> : ""}
            {showDescription ? <td>{row.description}</td> : ""}
            {showDoj ? <td>{row.doj}</td> : ""}
            {showEdit ? (
              <td>
                <button onClick={() => onEdit(row)}>Edit</button>
              </td>
            ) : (
              ""
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

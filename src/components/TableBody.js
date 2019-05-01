import React from "react";

const TableBody = ({ characterData, removeData }) => {
  const rows = characterData.map(({ name, email }, index) => {
    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button className="btn btn-danger" onClick={() => removeData(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default TableBody;

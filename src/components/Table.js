import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ characterData, removeData }) => {
  return (
    <div>
      <p>Add a character with a name and a job to the table</p>
      <table className="table table-hover">
        <TableHeader />
        <TableBody characterData={characterData} removeData={removeData} />
      </table>
    </div>
  );
};

export default Table;

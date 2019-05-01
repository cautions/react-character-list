import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);

  const fetchUrl = () => {
    const url = "https://jsonplaceholder.typicode.com/users/";

    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  const removeCharacter = index => {
    const char = data.filter((char, i) => {
      return i !== index;
    });
    setData(char);
  };

  const handleSubmit = character => {
    setData([...data, character]);
  };

  return (
    <div className="App container mt-3 mb-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1>React Tutorial</h1>
          <Table characterData={data} removeData={removeCharacter} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-8 offset-md-2">
          <h4>Add New</h4>
          <Form handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const submitForm = () => {
    const data = { name, job };
    console.log(data);
    handleSubmit(data);
  };

  //const { value } = event.target;
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="job">Email</label>
        <input
          className="form-control"
          type="text"
          name="job"
          id="job"
          onChange={e => setJob(e.target.value)}
        />
      </div>
      <input
        className="btn btn-primary"
        type="button"
        value="Submit"
        onClick={submitForm}
      />
    </form>
  );
};

export default Form;

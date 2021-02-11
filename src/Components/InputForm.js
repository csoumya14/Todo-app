import React from 'react';

const InputForm = () => {
  return (
    <div className="form-field">
      <label htmlFor="input-text" className="visually-hidden">
        create a new todo
      </label>
      <span id="text-hint" className="input-hint">
        <div className="circle"></div>
        create a to do list
      </span>
      <input id="input-text" aria-describedby="text-hint" name="text" type="text"></input>
    </div>
  );
};
export default InputForm;

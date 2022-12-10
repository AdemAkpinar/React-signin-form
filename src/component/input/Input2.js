import React from "react";

function Input({ type, onChange }) {
  return <input className="form-control" type={type} onChange={onChange} />;
}

export default Input;

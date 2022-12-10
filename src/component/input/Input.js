import React from "react";

function Input({ type, onChange }) {
  return (
    <main className="form-signin w-50 m-auto">
      <div className="form-floating">
        <input type={type} onChange={onChange} className="form-control" />
      </div>
    </main>
  );
}

export default Input;

import React from "react";
import "./button.css";

function Button({ onClick }) {
  return (
    <main className="form-signin w-50 m-auto">
      <button
        onClick={onClick}
        className="w-100 btn btn-lg btn-primary"
        type="submit"
      >
        Sign in
      </button>
    </main>
  );
}

export default Button;

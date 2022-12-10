import React from "react";
import "./button.css";

function Button({ onClick }) {
  return (
    <button className="btn btn-primary d-flex" onClick={onClick}>
      Giriş Yap
    </button>
  );
}

export default Button;

import "./styles.css";
import Input from "./component/input/Input";
import Button from "./component/button/Button";
import Form from "./component/form/Form";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState({ name: "", password: "" });
  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });
      console.log(user);
    } else {
      setUser({ ...user, password: e.target.value });
      console.log(user);
    }
  };

  const handleClick = () => {
    if (user.name === "") {
      alert("Kullanıcı adı alanı boş geçilemez");
    } else if (user.password === "") {
      alert("Parola alanı boş geçilemez");
    } else {
      alert("Kullanıcı adınız:" + user.name + " Parolanız:" + user.password);
    }
  };

  return (
    <div className="container text-center">
      <h2> Giriş Formu</h2>
      <Form>
        <Input type={"text"} onChange={handleChange} value={user.name} />
        <Input
          type={"password"}
          onChange={handleChange}
          value={user.password}
        />
        <Button onClick={handleClick} />
      </Form>
    </div>
  );
}

import { FormEvent } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";
export const RegistrerPage = () => {
  const { values, name, email, password, password2, handleOnchange, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div>
      <h1> Registrer Page </h1>
      <form noValidate onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleOnchange}
          name="name"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleOnchange}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleOnchange}
          name="password"
        />
        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          onChange={handleOnchange}
          name="password2"
        />
        <button type="submit">Create</button>
        <button onClick={reset}>Reset</button>
      </form>
    </div>
  );
};

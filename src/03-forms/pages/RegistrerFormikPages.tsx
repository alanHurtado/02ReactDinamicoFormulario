import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";
export const RegistrerFormikPage = () => {
  return (
    <div>
      <h1> Registrer Formik Page </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .min(2, "Nombre no valido")
            .required("Requerido"),
          email: Yup.string().required("Requerido").email("formato no valido"),
          password: Yup.string()
            .required("Requerido")
            .min(6, "El password debe de tener minimo 6 caracteres"),
          password2: Yup.string()
            .required("Requerido")
            .min(6, "El password debe de tener minimo 6 caracteres")
            .equals(
              ["password", Yup.ref("password")],
              "Password diferentes"
            ),
        })}
        // onReset={}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput label=" Name" name="name" />
            <MyTextInput label="Email" name="email" />
            <MyTextInput label="Password" name="password" type="password" />
            <MyTextInput
              label="Confirm Password"
              name="password2"
              type="password"
            />
            <button type="submit"> Submit </button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

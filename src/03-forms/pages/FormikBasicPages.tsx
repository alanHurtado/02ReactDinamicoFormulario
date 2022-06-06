import "../styles/styles.css";
import { FormikErrors, useFormik } from "formik";
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPages = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstName) {
      errors.firstName = "Required";
    } else if (firstName.length > 15) {
      errors.firstName = "Must be 15 character or less";
    }

    if (!lastName) {
      errors.lastName = "Required";
    } else if (lastName.length > 10) {
      errors.lastName = "Must be 10 character or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { handleSubmit, values, handleChange, handleBlur,errors, touched } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  return (
    <div>
      <h1> Formik Basic Tutorial </h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name </label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && <span> {errors.firstName} </span>}
        <label htmlFor="lasttName">Last Name </label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          />
          {touched.lastName && errors.lastName && <span> {errors.lastName} </span>}
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          />
          {touched.email && errors.email && <span> {errors.email} </span>}
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};
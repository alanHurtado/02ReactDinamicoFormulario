import { Form, Formik } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from 'yup';

interface PropsForm {
  [x: string]: any;
}
const initialValues: PropsForm = {};
const requiredFields: PropsForm = {};
for (const input of formJson) {
  initialValues[input.name] = input.value;
  
  if (!input.validations) continue;
  let schema = Yup.string();
  for(const rule of input.validations){
      if(rule.type ==='requiered'){
          schema = schema.required(rule.mesagge);
      }

  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicFormPages = () => {
  return (
    <div>
      <h1> Dynamic Form </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              } else if (
                type === "input" ||
                type === "password" ||
                type === "email"
              ) {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              }
              throw new Error(`El type: ${type} no es soportado `);
            })}
            <button type="submit"> Enviar </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialValues: T) => {

  const [values, setValues] = useState(initialValues);
const reset =() =>{
    setValues({...initialValues})
}
  const handleOnchange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return {handleOnchange, reset, values, ...values};
};

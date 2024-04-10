import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

const FormProvider = ({children}) => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        pass: '',
        termsChecked: false
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    


    return (
        <FormContext.Provider value={{ formData, handleChange }}>
        {children}
      </FormContext.Provider>
    );
};

export default FormProvider;
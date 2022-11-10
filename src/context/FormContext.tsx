import { createContext, useContext, useRef, useState } from 'react';

type FormContextType = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  validEmail: boolean;
  setValidEmail: React.Dispatch<React.SetStateAction<boolean>>;
  validPassword: boolean;
  setValidPassword: React.Dispatch<React.SetStateAction<boolean>>;
  allValidate: boolean;
  setAllValidate: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
};

type FormContextProviderProps = {
  children: React.ReactNode;
};

const FormContext = createContext({} as FormContextType);

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [allValidate, setAllValidate] = useState(true);
  const [error, setError] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FormContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        validEmail,
        setValidEmail,
        allValidate,
        setAllValidate,
        validPassword,
        setValidPassword,
        error,
        setError,
        inputRef,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  if (!FormContext) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }
  return useContext(FormContext);
};

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
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
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
  const [error, setError] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validEmail || !validPassword) {
      setError('Invalid email or password');
    }
    alert(`Form submitted ${email} ${password}`);
  };

  return (
    <FormContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        validEmail,
        setValidEmail,
        validPassword,
        setValidPassword,
        error,
        setError,
        inputRef,
        handleSubmit,
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

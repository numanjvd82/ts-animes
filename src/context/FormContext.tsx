import { createContext, useContext, useState } from 'react';

type FormContextType = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  error: string;
  setError: (error: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

type FormContextProviderProps = {
  children: React.ReactNode;
};

const FormContext = createContext({} as FormContextType);

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <FormContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        loading,
        setLoading,
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

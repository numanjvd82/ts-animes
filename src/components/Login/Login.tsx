import { FormContextProvider, useFormContext } from '../../context/FormContext';

function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    loading,
    setLoading,
  } = useFormContext();
  return (
    <FormContextProvider>
      <section>
        <h1>Login</h1>
      </section>
    </FormContextProvider>
  );
}

export default Login;

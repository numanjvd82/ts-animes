import React, { useEffect } from 'react';
import { useFormContext } from '../../context/FormContext';

function Login() {
  const {
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
  } = useFormContext();

  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const PASSWORD_REGEX =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const emailValid = EMAIL_REGEX.test(email);
    if (emailValid) {
      setValidEmail(true);
    }
    if (!emailValid) {
      setValidEmail(false);
    }
    console.log(emailValid);
  }, [email]);

  useEffect(() => {
    const passwordValid = PASSWORD_REGEX.test(password);
    if (passwordValid) {
      setValidPassword(true);
    }
    if (!passwordValid) {
      setValidPassword(false);
    }
  }, [password]);

  useEffect(() => {
    setError('');
  }, [email, password]);

  return (
    <section className="flex justify-center items-center h-screen">
      <section className="flex-1 max-w-[1000px]">
        <form
          onSubmit={handleSubmit}
          className="bg-white m-3 py-3 px-6 h-[400px] flex flex-col justify-center rounded-md"
        >
          <p
            className={`inline-block p-1 font-semibold mt-1 rounded-md mb-4 text-sm text-gray-600 bg-red-200
           ${error ? 'inline-block' : 'hidden'}
          `}
          >
            {error}
          </p>
          <h1 className="text-3xl font-bold text-center my-6">
            Login with your account
          </h1>
          <div className="my-2">
            <input
              ref={inputRef}
              className={`inline-block w-full px-4 py-2  text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500
               ${
                 //  !validEmail
                 //    ? 'invalid:bg-red-100 invalid:border-red-500 '
                 //    : 'valid:bg-green-100 valid:border-green-500'
                 ''
               }
              `}
              type="email"
              placeholder="Your Email Address"
              value={email}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <p
              className={`inline-block p-1 font-semibold mt-1 rounded-md mb-4 text-sm text-gray-600 bg-red-200 ${
                email && !validEmail ? 'visible' : 'hidden'
              }`}
            >
              Please enter a valid email address
            </p>
          </div>
          <div className="my-2">
            <input
              className={`inline-block w-full px-4 py-2  text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500
              
              ${
                // !validPassword
                //   ? 'invalid:bg-red-100 invalid:border-red-500 '
                //   : 'valid:bg-green-100 valid:border-green-500'
                ''
              }


              `}
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />

            <p
              className={`inline-block p-1 font-semibold mt-1 rounded-md mb-4 text-sm text-gray-600 bg-red-200 ${
                password && !validPassword ? 'visible' : 'hidden'
              }`}
            >
              Password should be between 8 to 15 charecters, contains at least
              one uppercase, one special charecter and one number.
            </p>
          </div>
          <button
            className="inline-block p-2 w-full bg-blue-400 rounded-md text-white font-medium hover:bg-blue-500 text-lg focus:outline-none transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-400"
            type="submit"
            disabled={validEmail && validPassword ? false : true}
          >
            Login
          </button>
        </form>
      </section>
    </section>
  );
}

export default Login;

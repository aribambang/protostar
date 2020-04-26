import { useState, useEffect } from 'react';
import Router from 'next/router';
import { signup, isAuth } from '../../../actions/auth';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: false,
    loading: false,
    message: '',
    showForm: true,
  });

  useEffect(() => {
    isAuth() && Router.push('/');
  }, []);

  const onSubmit = async (evt) => {
    evt.preventDefault();

    setValues({
      ...values,
      loading: true,
      error: false,
    });

    const user = { name, email, password };

    try {
      const { data } = await signup(user);
      setValues({
        ...values,
        name: '',
        email: '',
        error: false,
        loading: false,
        message: data.message,
        showForm: false,
      });
    } catch (err) {
      const error = err.response.data.error;
      setValues({
        ...values,
        error: error,
      });
    }
  };

  const handleChange = (field) => (evt) => {
    setValues({
      ...values,
      error: false,
      [field]: evt.target.value,
    });
  };

  const { name, email, password, error, loading, message, showForm } = values;

  const showLoading = () =>
    loading ? <div className='alert alert-info'>Loading...</div> : '';

  const showError = () =>
    error ? <div className='alert alert-error'>{error}</div> : '';

  const showMessage = () =>
    message ? <div className='alert alert-success'>{message}</div> : '';

  return (
    <>
      {showLoading()}
      {showError()}
      {showMessage()}
      {showMessage && (
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              onChange={handleChange('name')}
              value={name}
              type='text'
              className='form-control'
              id='name'
              placeholder='Type your name'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              onChange={handleChange('email')}
              value={email}
              type='email'
              className='form-control'
              id='email'
              placeholder='Type your email'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              onChange={handleChange('password')}
              value={password}
              type='password'
              className='form-control'
              id='password'
              placeholder='Type your password'
            />
          </div>

          <div className='text-center'>
            <button type='submit' className='btn btn-primary'>
              Signup
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Signup;

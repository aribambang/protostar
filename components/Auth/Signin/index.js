import { useState } from 'react';
import { signin } from '../../../actions/auth';
import Router from 'next/router';

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: false,
    loading: false,
    message: '',
    showForm: true,
  });

  const onSubmit = async (evt) => {
    evt.preventDefault();

    setValues({
      ...values,
      loading: true,
      error: false,
    });

    const user = { email, password };

    try {
      const { data } = await signin(user);

      Router.push(`/`);
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

  const { email, password, error, loading, message, showForm } = values;

  const showLoading = () =>
    loading ? <div className='alert alert-info'>Loading...</div> : '';

  const showError = () =>
    error ? <div className='alert alert-danger'>{error}</div> : '';

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
              Signin
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Signin;

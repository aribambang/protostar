import { useState } from 'react';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true,
  });

  const onSubmit = (evt) => {
    console.table({ name, email, password, error, loading, message, showForm });
    evt.preventDefault();
  };

  const handleChange = (field) => (evt) => {
    setValues({
      ...values,
      error: '',
      [field]: evt.target.value,
    });
  };

  const { name, email, password, error, loading, message, showForm } = values;

  return (
    <div className='row justify-content-center'>
      <div className='col-12 col-md-6'>
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
      </div>
    </div>
  );
};

export default Signup;

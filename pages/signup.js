import Layout from '../components/Layout';
import SignupComponent from '../components/Auth/Signup';

const Signup = () => {
  return (
    <Layout>
      <div className='row justify-content-center'>
        <div className='col-12 text-center'>
          <h2>Signup page</h2>
        </div>
        <div className='col-12 col-md-6'>
          <SignupComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;

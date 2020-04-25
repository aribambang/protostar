import Layout from '../components/Layout';
import SigninComponent from '../components/Auth/Signin';

const Signin = () => (
  <Layout>
    <div className='row justify-content-center'>
      <div className='col-12 text-center'>
        <h2>Signin page</h2>
      </div>
      <div className='col-12 col-md-6'>
        <SigninComponent />
      </div>
    </div>
  </Layout>
);

export default Signin;

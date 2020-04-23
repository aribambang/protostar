import Layout from '../components/Layout';
import Link from 'next/link';

const Signup = () => (
  <Layout>
    <div className='container'>
      <h1>Signup</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  </Layout>
);

export default Signup;

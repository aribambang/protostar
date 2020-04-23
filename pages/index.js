import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <div className='container'>
      <h1>Protostar</h1>
      <Link href='/signup'>
        <a>Signup</a>
      </Link>
    </div>
  </Layout>
);

export default Home;

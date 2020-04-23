import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <h1>Protostar</h1>
    <Link href='/signup'>
      <a>Signup</a>
    </Link>
  </Layout>
);

export default Home;

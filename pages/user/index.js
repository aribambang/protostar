import Layout from '../../components/Layout';
import Private from '../../components/Auth/Private';
import Link from 'next/link';

const UserIndex = () => (
  <Layout>
    <Private>
      <h1>User Dashboard</h1>
    </Private>
  </Layout>
);

export default UserIndex;

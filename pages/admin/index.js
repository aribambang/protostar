import Layout from '../../components/Layout';
import Admin from '../../components/Auth/Admin';
import Link from 'next/link';

const AdminIndex = () => (
  <Layout>
    <Admin>
      <h1>Admin Dashboard</h1>
    </Admin>
  </Layout>
);

export default AdminIndex;

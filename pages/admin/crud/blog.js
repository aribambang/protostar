import Layout from '../../../components/Layout';
import Admin from '../../../components/Auth/Admin';
import BlogCreate from '../../../components/Crud/BlogCreate';
import Link from 'next/link';

const CatergoryTag = () => (
  <Layout>
    <Admin>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 pt-5 pb-5'>
            <h1>Create a new blog</h1>
          </div>
          <div className='col-md-12'>
            <BlogCreate />
          </div>
        </div>
      </div>
    </Admin>
  </Layout>
);

export default CatergoryTag;

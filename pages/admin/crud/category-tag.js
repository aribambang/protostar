import Layout from '../../../components/Layout';
import Admin from '../../../components/Auth/Admin';
import Category from '../../../components/Crud/Category';
import Link from 'next/link';

const CatergoryTag = () => (
  <Layout>
    <Admin>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 pt-5 pb-5'>
            <h1>Manage Category and Tag</h1>
          </div>
          <div className='col-md-6'>
            <Category />
          </div>
          <div className='col-md-6'>Tags</div>
        </div>
      </div>
    </Admin>
  </Layout>
);

export default CatergoryTag;

import Header from '../Header';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='container mt-3'>{children}</main>
    </>
  );
};

export default Layout;

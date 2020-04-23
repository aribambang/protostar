import Header from '../Header';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <p>footer</p>
    </>
  );
};

export default Layout;

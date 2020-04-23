const Layout = ({ children }) => {
  return (
    <div>
      <p>Header</p>
      <main>{children}</main>
      <p>footer</p>
    </div>
  );
};

export default Layout;

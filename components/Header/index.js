import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../../config';
import { signout, isAuth } from '../../actions/auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  NavbarText,
} from 'reactstrap';

import '../.././node_modules/nprogress/nprogress.css';
import Search from '../Blog/Search';

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setAuthenticated(isAuth());
  }, []);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <Link href='/'>
          <NavLink className='font-weight-bold' style={{ cursor: 'pointer' }}>
            {APP_NAME}
          </NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <>
              <NavItem>
                <Link href='/blogs'>
                  <NavLink style={{ cursor: 'pointer' }}>Blogs</NavLink>
                </Link>
              </NavItem>
            </>
            {!authenticated && (
              <>
                <NavItem>
                  <Link href='/signin'>
                    <NavLink style={{ cursor: 'pointer' }}>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/signup'>
                    <NavLink style={{ cursor: 'pointer' }}>Signup</NavLink>
                  </Link>
                </NavItem>
              </>
            )}
            {authenticated && (
              <>
                <NavItem>
                  <Link href={isAuth().role == 0 ? '/user' : '/admin'}>
                    <NavLink style={{ cursor: 'pointer' }}>
                      {`${isAuth().name}'s Dashboard`}
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: 'pointer' }}
                    onClick={() => signout(() => Router.replace('/signin'))}
                  >
                    Signout
                  </NavLink>
                </NavItem>
              </>
            )}
            <NavItem>
              <Link href='/user/crud/blogs'>
                <NavLink
                  className='btn btn-primary text-light'
                  style={{ cursor: 'pointer' }}
                >
                  Write a blog
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Search />
    </div>
  );
};

export default Header;

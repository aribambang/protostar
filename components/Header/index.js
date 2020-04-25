import { useState } from 'react';
import Link from 'next/link';
import { APP_NAME } from '../../config';
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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

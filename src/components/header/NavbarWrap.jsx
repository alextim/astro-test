import { ComponentContext as NavbarContext } from '../ComponentContext';
import Navbar from './components/Navbar';

const NavbarWrap = ({ context }) => (
  <NavbarContext.Provider value={context}>
    <Navbar />
  </NavbarContext.Provider>
);

export default NavbarWrap;


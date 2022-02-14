import { ComponentContext } from '../ComponentContext';
import Navbar from './components/Navbar';

const NavbarWrap = ({ context }) => (
  <ComponentContext.Provider value={context}>
    <Navbar />
  </ComponentContext.Provider>
);

export default NavbarWrap;

import { menuItems } from '../../../mock/menuItems';
import MenuItems from './menuItems';

const Navbar = () => {
	return (
		<nav className="bg-red-200">
			<ul className="menus">
				{menuItems.map((menu, index) => {
					const depthLevel = 0;
					return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;

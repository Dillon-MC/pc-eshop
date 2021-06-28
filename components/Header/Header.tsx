import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import FavouriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import SearchBar from '../SearchBar/SearchBar';
import Menu from '../Menu/Menu';

const Header = (): JSX.Element => {
    return (
        <div id="header">
            <div id="header_container">
                {/* Menu will only be display if screen size is <= 1300px */}
                <div className="header_menu">
                    <Menu>
                        <div className="menubutton_container">
                            <div>
                                <button className="menu_button">About</button>
                                <button className="menu_button">Help</button>
                            </div>
                        </div>
                    </Menu>
                </div>
                {/* Buttons will be display in the menu if the screen-size is > 1300px */}
                <div className="header_buttons">
                    <button className="menu_button">About</button>
                    <button className="menu_button">Help</button>
                </div>
                <SearchBar />
                <CustomTooltip title="Account">
                    <EmojiEmotionsIcon className="icon" />
                </CustomTooltip>
                <CustomTooltip title="Wish-List">
                    <FavouriteIcon className="icon" />
                </CustomTooltip>
                <CustomTooltip title="Cart">
                    <ShoppingCartIcon className="icon" />
                </CustomTooltip>
            </div>
        </div>
    );
}

export default Header;
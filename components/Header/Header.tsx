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
                <Menu>
                    <div className="menubutton_container">
                        <button className="menu_button">About</button>
                        <button className="menu_button">Help</button>
                    </div>
                </Menu>
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
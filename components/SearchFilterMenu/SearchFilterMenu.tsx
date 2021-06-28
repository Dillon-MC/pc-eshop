import { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Dropdown from '../Dropdown/Dropdown';
import CustomButtonGroup from '../ButtonGroup/CustomButtonGroup';
import CustomRating from '../Rating/CustomRating';
import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';
import { useEffect } from 'react';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0071ff"
        },
        secondary: {
            main: "#ffffff"
        }
    }
});

const BrandNames = [
    'Logitech',
    'Corsair',
    'Asus',
    'Acer',
    'HP',
    'Dell',
];

const SearchFilterMenu = (): JSX.Element => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <ThemeProvider theme={theme}>
            <div className="filtermenu">
                <button onClick={() => setMenuOpen(!menuOpen)} className={`filtertab_button filtertab_button_open_${menuOpen}`}>
                    Filters
                </button>
                <Backdrop open={menuOpen} onClick={() => setMenuOpen(false)} />
                <div className={`filtermenu_container filtermenu_open_${menuOpen}`}>
                    <div className="filtermenu_buttongroup">
                        <CustomButtonGroup buttonContent={['Apply', 'Clear All']} />
                    </div>
                    <h2>Filter</h2>
                    <h1>Categories</h1>
                    <CategoryFilter />
                    <h2>Price</h2>
                    <PriceFilter />
                    <div className="filtermenu_rating">
                        <h2>Rating</h2>
                        <CustomRating controlled={true} />
                    </div>
                    <div className="filtermenu_dropdwon">
                        <Dropdown label="Brands" listItems={BrandNames} />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default SearchFilterMenu;
import Drawer from '@material-ui/core/Drawer';
import React, { ReactElement, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Backdrop from '@material-ui/core/Backdrop';

const Menu = ({ children }: { children: ReactElement }): JSX.Element => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
            <div>
                <div onClick={() => setMenuOpen(!menuOpen)}><MenuIcon className="icon menu_icon" /></div>
                <Backdrop open={menuOpen} onClick={() => setMenuOpen(false)}>
                        <Drawer
                            variant="persistent"
                            anchor="top"
                            open={menuOpen}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div>
                                {children}
                            </div>
                        </Drawer>
                </Backdrop>
            </div>
        </ClickAwayListener>
    );
}

export default Menu;
import Tooltip from '@material-ui/core/Tooltip';
import React, { ReactElement, useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Zoom from '@material-ui/core/Zoom';

const CustomTooltip = ({ children, title }: { children: ReactElement, title: string }): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);

    const handleTooltipClose = (): void => {
        setOpen(false);
    };

    const handleTooltipOpen = (): void => {
        setOpen(true);
    };

    return (
        <div className="customtooltip">
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <Tooltip
                    title={title}
                    arrow
                    onClose={handleTooltipClose}
                    onClick={handleTooltipOpen}
                    open={open}
                    onOpen={handleTooltipOpen}
                    TransitionComponent={Zoom}
                    TransitionProps={{ timeout: 150 }}
                    disableTouchListener
                    >
                    {children}
                </Tooltip>
            </ClickAwayListener>
        </div>
    );
}

export default CustomTooltip;
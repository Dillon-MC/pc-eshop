import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { ReactElement } from 'react';

const buttonStyles = {
    width: "115px",
    height: "40px",
    color: "#0071ff",
    borderColor: "#0071ff",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "10px",
    borderBottomRightRadius: "0px",
    borderTopRightRadius: "0px"
}

//Styles for the end button
const buttonEndStyles = {
    borderBottomRightRadius: "10px",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "0px",
    borderTopLeftRadius: "0px"
}

const CustomButtonGroup = ({ buttonContent }: { buttonContent: Array<string> | Array<ReactElement> }): JSX.Element => {
    return (
        <ButtonGroup
            variant="contained" color="secondary" aria-label="contained primary button group"
            style={{ width: "230px", borderRadius: "10px" }}
        >
            {buttonContent && buttonContent.map((content, index) => {
                if (index === buttonContent.length-1)
                    return <Button key="endbutton" style={{ ...buttonStyles, ...buttonEndStyles }}>{content}</Button>
                else
                    return <Button key={`button${index}`} style={buttonStyles}>{content}</Button>
            })}
        </ButtonGroup>
    );
}

export default CustomButtonGroup;
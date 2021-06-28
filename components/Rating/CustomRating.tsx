import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const StyledRating = withStyles({
    iconFilled: {
        color: "#0071ff",
    },
})(Rating);

const CustomRating = ({ controlled, ratingValue }: { controlled: boolean, ratingValue?: number }): JSX.Element => {
    const [rating, setRating] = useState<number>(ratingValue);

    return (
        controlled ?
            <StyledRating
                name="rating"
                defaultValue={1}
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
            />
            :
            <StyledRating
                name="rating"
                defaultValue={1}
                value={rating}
            />
    );
}

export default CustomRating;
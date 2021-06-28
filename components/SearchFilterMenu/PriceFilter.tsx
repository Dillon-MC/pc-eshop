import { useEffect, useState } from "react";
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const PriceFilter = (): JSX.Element => {
    const [minmaxPrice, setMinMaxPrice] = useState<Array<number>>([0, 9999]);
    const [saleToggle, setSaleToggle] = useState<boolean>(false);

    const setFilterMenuMinMaxPriceSlider = (event, newValue): void => {
        setMinMaxPrice(newValue);
    }

    const setFilterMenuMinMaxPriceBox = (event, boxId: string): void => {
        let { value, min, max } = event.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));

        boxId === 'min'
            ? setMinMaxPrice([value, minmaxPrice[1]])
            : setMinMaxPrice([minmaxPrice[0], value])
    }

    const setSaleToggleValue = (): void => {
        setSaleToggle(!saleToggle);
    }

    useEffect((): void => {
        if (minmaxPrice[0] >= minmaxPrice[1])
            setMinMaxPrice([minmaxPrice[1] - 1, minmaxPrice[1]]);
        else if (minmaxPrice[1] <= minmaxPrice[0])
            setMinMaxPrice([minmaxPrice[0], minmaxPrice[0] + 1]);
    }, [minmaxPrice]);

    return (
        <div className="filtermenu_price_container">
            <Slider
                step={1}
                min={0}
                max={10000}
                onChange={setFilterMenuMinMaxPriceSlider}
                value={minmaxPrice}
                valueLabelDisplay="off"
                color="primary"
            />
            <div className="filtermenu_pricebox">
                <p>Min</p>
                <input
                    type="number"
                    min="0"
                    max="9998"
                    step={0.5}
                    value={minmaxPrice[0]}
                    onChange={(e) => setFilterMenuMinMaxPriceBox(e, 'min')} />
            </div>
            <div className="filtermenu_pricebox">
                <p>Max</p>
                <input
                    type="number"
                    min="1"
                    max="10000"
                    step={1}
                    value={minmaxPrice[1]}
                    onChange={(e) => setFilterMenuMinMaxPriceBox(e, 'max')} />
            </div>
            <div className="toggleswitch">
                <FormControlLabel
                    control={
                        <Switch
                            checked={saleToggle}
                            onChange={setSaleToggleValue}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    labelPlacement="top"
                    label="Sale"
                />
            </div>
        </div>
    );
}

export default PriceFilter;
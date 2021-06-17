import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import { GridSize } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export interface ITileProps {
    image?: string,
    imageWidth?: number,
    title: string,
    link: string,
    gridsize: boolean | GridSize | undefined,
}

const Tile = (tile: ITileProps): JSX.Element => {
    return (
        <Grid item xs={tile.gridsize}>
            <div className="tile">
                <a href={tile?.link}>
                    <h3>{tile.title}</h3>
                    {tile?.image && <Image src={tile.image} alt="image" width={tile.imageWidth} height={130} />}
                </a>
            </div>
        </Grid>
    );
}

export default Tile;
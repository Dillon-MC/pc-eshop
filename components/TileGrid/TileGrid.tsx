import Tile, { ITileProps } from './Tile';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { GridSize } from '@material-ui/core';

interface ITileGridProps {
    tileData: Array<{
        image?: string,
        imageWidth?: number
        title: string,
        link: string,
        gridsize: boolean | GridSize | undefined,
    }>
}

const TileGrid = (tiles: ITileGridProps): JSX.Element => {
    const gridSpacing: any = 4;
    return (
        <div className="tile_grid">
            <Grid container spacing={gridSpacing}>
                {tiles.tileData.map((tiledata: ITileProps) => <Tile {...tiledata} key={tiledata.title} />)}
            </Grid>
        </div>
    );
}

export default TileGrid;
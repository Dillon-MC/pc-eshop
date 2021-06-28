import { useRouter } from 'next/router';
import styles from '../../styles/SubCategory.module.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import MouseIcon from '@material-ui/icons/Mouse';
import KeyboardIcon from '@material-ui/icons/KeyboardOutlined';
import DisplayIcon from '@material-ui/icons/DesktopWindows';
import HeadsetIcon from '@material-ui/icons/Headset';
import GampadIcon from '@material-ui/icons/SportsEsports';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        color: '#0071ff',
        background: 'linear-gradient(-90deg, rgba(235,235,235,1) 38%, rgba(255,255,255,1) 71%)',
        width: '150px',
        height: '80px',
        fontSize: 'large'
    },
}));

// Displays a grid of sub-categories based on the selected category
const displaySubCategories = ({ _classes, category }: { _classes: ClassNameMap, category: string }): JSX.Element => {
    switch (category) {
        case 'laptops': case 'desktops':
            return (
                <div className={styles.subcategory_container}>
                    <Button classes={_classes} variant="contained"><WorkIcon/> Work</Button>
                    <Button classes={_classes} variant="contained"><GampadIcon/> Gaming</Button>
                </div>
            );
        case 'accessories':
            return (
                <div className={styles.subcategory_container}>
                    <Button classes={_classes} variant="contained"><KeyboardIcon/> Keyboards</Button>
                    <Button classes={_classes} variant="contained"><MouseIcon/> Mice</Button>
                    <Button classes={_classes} variant="contained"><HeadsetIcon/> Audio</Button>
                    <Button classes={_classes} variant="contained"><DisplayIcon/> Displays</Button>
                </div>
            );
        default:
            return (
                <div>
                    <div className="error_msg"><p>{`Category ${category} not found. 204`}</p></div>
                </div>
            );
    }
}

const SubCategory = () => {
    const classes = useStyles();
    const router = useRouter();
    // The cid (category ID)
    const { cid } = router.query;

    return (
        <div id={styles.subcategory_page}>
            <div>
                {cid ?
                    displaySubCategories({ _classes: classes, category: cid.toString() })
                    : <div></div>
                }
            </div>
            <footer>Hello Footer</footer>
        </div>
    );
}

export default SubCategory;
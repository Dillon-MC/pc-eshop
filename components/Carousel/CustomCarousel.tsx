import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from "../CustomErrorBoundary/ErrorFallback";

interface ICarouselProps {
    items: Array<
        {
            name: string,
            description: string,
            link: string,
            imageURL: string,
        }
    >
}

const CustomCarousel = ({ props }: { props: ICarouselProps }): JSX.Element => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { window.location.reload() }}>
            <div className="carousel_container">
                <Carousel className="carousel"
                    activeIndicatorIconButtonProps={{ style: { color: '#0071ff' }, className: '' }}
                    interval={5000}
                    animation="slide"
                    navButtonsAlwaysVisible={true}
                    next={(active: any) => console.log(active)}
                    prev={((prev: any) => console.log(prev))}
                >
                    {props.items.map(item =>
                        <a href={item.link}>
                            <Paper className="mui_paper" elevation={3}>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </Paper>
                        </a>
                    )}
                </Carousel>
            </div>
        </ErrorBoundary>
    );
}

export default CustomCarousel;
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from "../CustomErrorBoundary/ErrorFallback";
import { ApolloError } from '@apollo/client/errors';
import { Skeleton } from "@material-ui/lab";
interface ICarouselProps {
    data: {
        getPromotedProducts: Array<
            {
                name: string,
                // description: string,
                // link: string,
                // imageURL: string,
            }
        >
    } | undefined,
    loading: boolean,
    error?: ApolloError | undefined,
}

const CustomCarousel = ({ props }: { props: ICarouselProps }): JSX.Element => {
    console.log('props', props)
    const { loading, data }: ICarouselProps = props;
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
                    {
                        loading ? <Skeleton variant="rect" width={210} height={118} />
                        : data?.getPromotedProducts.map((item, index) =>
                            <a href="" key={item.name+index}>
                                <Paper className="mui_paper" elevation={3}>
                                    <h2>{item.name}</h2>
                                </Paper>
                            </a>
                        )
                    }
                </Carousel>
            </div>
        </ErrorBoundary>
    );
}

export default CustomCarousel;
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../CustomErrorBoundary/ErrorFallback';
import { ApolloError } from '@apollo/client/errors';
import Image from 'next/image';
import Skeleton from '@material-ui/lab/Skeleton';

interface ICarouselProps {
    data: {
        getPromotedProducts: Array<
            {
                name: string,
                description: string,
                pageLink: string,
                imageURL: string,
            }
        >
    } | undefined,
    loading: boolean,
    error?: ApolloError | undefined,
}

const CustomCarousel = ({ props }: { props: ICarouselProps }): JSX.Element => {
    const { loading, data }: ICarouselProps = props;

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { window.location.reload() }}>
            <div className="carousel_container">
                <Carousel
                    activeIndicatorIconButtonProps={{ style: { color: '#0071ff' }, className: '' }}
                    interval={5000}
                    animation="slide"
                    navButtonsAlwaysVisible={true}
                >
                    {
                        loading ?
                            <Skeleton
                                height={250}
                                variant="rect"
                                animation="wave"
                                style={{ backgroundColor: '#585959', width: '100%' }}
                            />
                            : data?.getPromotedProducts.map((item, index) =>
                                <a href="" key={item.name + index} className="no_underline">
                                    <Paper className="mui_paper" elevation={3}>
                                        <legend className="no_margin legend_2">{item.name}</legend>
                                        <span className="product_image">
                                            <Image src={item.imageURL} alt="productImage" width={220} height={150} />
                                        </span>
                                        <p className="no_margin">{item.description}</p>
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
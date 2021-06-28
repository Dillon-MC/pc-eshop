import Image from 'next/image';
import HeartIconOutline from '@material-ui/icons/FavoriteBorder';
import HeartIconFilled from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

interface ProductProps {
    name: string,
    originalPrice: number,
    discountPrice: number,
    saved: boolean,
    isDiscounted: boolean
}

const ProductCard = (product: ProductProps): JSX.Element => {
    return (
        <div className="product_card">
            <Image
                src="https://crinix.com.ng/wp-content/uploads/2020/11/9yq59ea.jpg"
                alt="productImage"
                width={130}
                height={130}
            />
            <div className="product_card_container">
                <h3>Name</h3>
                <IconButton aria-label="save" className="product_savebutton">
                    {product.saved
                        ? <HeartIconFilled fontSize="large" className="product_saveicon" />
                        : <HeartIconOutline fontSize="large" className="product_saveicon" />
                    }
                </IconButton>
                {product.isDiscounted ?
                    <div className="product_card_price_container">
                        <p className="product_originalprice">{`$${product.originalPrice}`}</p>
                        <p className="product_discountprice">{`$${product.discountPrice}`}</p>
                    </div>
                    : <p>{`$${product.originalPrice}`}</p>
                }
            </div>
        </div>
    );
}

export default ProductCard;
// This page displays products

import styles from '../styles/ProductCatalog.module.css';
import ProductCard from '../components/ProductCard/ProductCard';
import Header from '../components/Header/Header';
import SearchFilterMenu from '../components/SearchFilterMenu/SearchFilterMenu';

const fakeProduct = {
    name: 'Product',
    originalPrice: 50,
    discountPrice: 25,
    saved: true,
    isDiscounted: true
}

const ProductCatalog = (): JSX.Element => {
    return (
        <div id={styles.searchedproducts_page}>
            <Header />
            <SearchFilterMenu />
            <div className={styles.tag_container}>
                {/* search tags will go here */}
            </div>

            <div className={styles.product_gridcontainer}>
                <ProductCard {...fakeProduct} />
                <ProductCard {...fakeProduct} />
                <ProductCard {...fakeProduct} />
                <ProductCard {...fakeProduct} />
            </div>
            <footer>Hello Footer</footer>
        </div>
    );
}

export default ProductCatalog
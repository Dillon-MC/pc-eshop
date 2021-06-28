const CategoryFilter = (): JSX.Element => {
    return (
        <div className="filtermenu_category_container">
            <a href="/all">{"All >"}</a>
            <a href="/laptops">{"Laptops >"}</a>
            <a href="/desktops">{"Desktops >"}</a>
            <a href="/accessories">{"Accessories >"}</a>
        </div>
    );
}

export default CategoryFilter;
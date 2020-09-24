import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ProductCategoryRow = (props) => {
    const category = props.category;
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
};

const ProductRow = (props) => {
    const product = props.product;
    const styleIsNotStock = !product.stocked ? { color: 'red' } : {};
    const name = <span style={styleIsNotStock}>{product.name}</span>;
    const price = <span>{product.price}</span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
}

const ProductTable = (props) => {
    const products = props.products;
    const rows = [];
    let lastCategory = null;
    products.forEach(product => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category} key={rows.length + 1} />
            );
        }
        rows.push(
            <ProductRow product={product} key={rows.length + 1} />
        );
        lastCategory = product.category;
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

const SearchBar = () => {
    return (
        <form>
            <p>
                <input name="q" placeholder="Search..." />
            </p>
            <p>
                <input type="checkbox" />
                {' '}
                <span>Only show products in stock</span>
            </p>
        </form>
    );
}

const ArticleFilter = ({ funcSetData }) => {
    const [query, setQuery] = useState('react');
    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
            if (!ignore) {
                // data from parent
                console.log(funcSetData);
                funcSetData(result.data);
                console.log(result.data);
            }
        }

        fetchData();
        return () => { ignore = true; }
    }, [query]);

    return (
        <input value={query} onChange={e => setQuery(e.target.value)} />
    );
}

const ArticleList = (props) => {
    return (
        <>
            {props.data.hits && <ul>
                {props.data.hits.map(item => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>}
        </>
    );
}

const FilterableProductTable = () => {
    const [data, setData] = useState({ hits: [] });
    const PRODUCTS = [
        { id: 1, category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { id: 2, category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
        { id: 3, category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
        { id: 4, category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { id: 5, category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
        { id: 6, category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
    ];
    return (
        <div>
            <SearchBar />
            <ProductTable products={PRODUCTS} />
            <div>
                <ArticleFilter funcSetData={setData} />
                <ArticleList data={data} />
            </div>
        </div>
    );
}
export default FilterableProductTable;

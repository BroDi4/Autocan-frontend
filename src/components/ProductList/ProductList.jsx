import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../axios';

import styles from './ProductList.module.scss';
import Pagination from '../Pagination/Pagination';
import ProductItem from '../ProductItem/ProductItem';
import Skeleton from '../ProductItem/Skeleton';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const filter = useSelector(state => state.filter);
  const rangeFilter = useSelector(state => state.rangeFilter);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get('/products', {
          params: {
            age: filter.selectedAge,
            model: filter.selectedModel._id,
            drive: filter.selectedDrive.value,
            box: filter.selectedBox.value,
            color: filter.selectedColor.value,
            price: rangeFilter.price,
            year: rangeFilter.year,
            mileage: rangeFilter.mileage,
            power: rangeFilter.power,
            page: currentPage,
          },
        });
        setProducts(data.products);
        setPageCount(data.pages);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [filter, rangeFilter, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, rangeFilter]);

  return (
    <div className={styles.root}>
      <div className='container'>
        {!isLoading && products.length === 0 ? (
          <div className={styles.notFound}>По вашему запросу ничего не найдено</div>
        ) : (
          <div className={styles.inner}>
            {isLoading
              ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
              : products.map(obj => {
                  return <ProductItem key={obj._id} {...obj} />;
                })}
          </div>
        )}
        {!(products.length === 0) && (
          <Pagination page={currentPage} setPage={setCurrentPage} pages={pageCount} />
        )}
      </div>
    </div>
  );
};

export default ProductList;

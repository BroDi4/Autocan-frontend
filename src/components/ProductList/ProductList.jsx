import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../axios';

import styles from './ProductList.module.scss';
import Pagination from '../Pagination/Pagination';
import ProductItem from '../ProductItem/ProductItem';
import { setPageCount } from '../../redux/slices/pageSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const filter = useSelector(state => state.filter);
  const rangeFilter = useSelector(state => state.rangeFilter);
  const page = useSelector(state => state.page.currentPage);

  const fetchProducts = async () => {
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
          page: page,
        },
      });
      setProducts(data.filtredProducts);
      dispatch(setPageCount(data.pages));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filter, rangeFilter, page]);

  return (
    <div className={styles.root}>
      <div className='container'>
        {products.length > 0 ? (
          <div className={styles.inner}>
            {products.map(obj => {
              return <ProductItem key={obj._id} {...obj} />;
            })}
          </div>
        ) : (
          <div className={styles.notFound}>По вашему запросу ничего не найдено</div>
        )}
        <Pagination />
      </div>
    </div>
  );
};

export default ProductList;

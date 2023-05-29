import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { axiosQuery } from '../../axios';

import styles from './ProductList.module.scss';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const filter = useSelector((state) => state.filter);
  const rangeFilter = useSelector((state) => state.rangeFilter);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axiosQuery.get('/products', {
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
        },
      });
      //   console.log(response);
      setProducts(response.data);
    };
    fetchProducts();
  }, [filter, rangeFilter]);

  return (
    <div className={styles.root}>
      <div className="container">
        {products.length > 0 ? (
          <div className={styles.inner}>
            {products.map((obj) => {
              return <ProductItem key={obj._id} {...obj} />;
            })}
          </div>
        ) : (
          <div className={styles.notFound}>По вашему запросу ничего не найдено</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;

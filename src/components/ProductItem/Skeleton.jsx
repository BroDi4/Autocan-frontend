import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={560}
    viewBox='0 0 400 560'
    backgroundColor='#d1d1d1'
    foregroundColor='#e3e3e3'
    style={{ width: '100%' }}
    {...props}>
    <rect x='4' y='13' rx='20px' ry='20px' width='390' height='550' />
  </ContentLoader>
);

export default Skeleton;

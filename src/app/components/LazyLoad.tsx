import React, { Suspense } from 'react';

const LazyLoad = ({ loader }: { loader: () => Promise<any> }) => {
  const LazyComponent = React.lazy(loader);

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyLoad;
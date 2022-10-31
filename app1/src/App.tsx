import {Loader} from './components/Loader'
import {Product} from './components/product'
import { useProducts } from './hooks/product';

function App() {
  const { loading, error, products} = useProducts()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader /> }
      { error && <p className='text-center text-red-600'> {error} </p> }
      { products.map(product => <Product product={product} key={product.id} />) }

      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
    </div>
  )
};

export default App;

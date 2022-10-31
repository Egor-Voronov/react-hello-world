import {Loader} from './components/Loader'
import {Error} from './components/Error'
import {Product} from './components/product'
import { useProducts } from './hooks/product';
import {Modal} from './components/Modal';
import { CreateProduct } from './components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from './models';
import { ModalContext } from './context/ModalContext';

function App() {
  const { loading, error, products, addProduct} = useProducts()
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close(false)
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader /> }
      { error && <Error error = {error} /> }
      { products.map(product => <Product product={product} key={product.id} />) }

      { modal && <Modal title='Create new product' onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-1/5'
      onClick={() => setModal(true)}>+</button>
    </div>
  )
};

export default App;

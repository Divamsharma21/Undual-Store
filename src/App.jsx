import { BrowserRouter as Router } from 'react-router-dom'
import Category from './Components/Category';
import Product from './Components/Product';
import ProductList from './Components/ProductList';

const App = () => {
  return (
    <Router>
      <>
        <Category />
        <Product />
        <ProductList />
         
      </>
    </Router>
  )
}

export default App
  
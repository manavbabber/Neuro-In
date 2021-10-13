import './App.css';
import { Route } from 'react-router-dom';
import { Home } from './components/Home';
import Product from './components/ProductDetails';
import {CategorizedProduct} from './components/CategorizedProduct';
import { Cart } from './components/Cart';

const App = () => {
    return (
      <div className="App">
        <Route path='/' exact  component={Home}/>
        <Route path='/details/:id' exact component={Product} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/category/:name' exact component={CategorizedProduct} />
      </div>
    );
}
export default App;
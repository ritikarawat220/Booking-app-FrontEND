import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import ProductDescription from '../components/pages/Home/ProductDescription';


it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <ProductDescription />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
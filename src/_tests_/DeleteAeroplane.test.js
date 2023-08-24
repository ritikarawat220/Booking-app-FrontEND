import React from "react";
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../store/store';
import DeleteAeroplane from "../components/pages/Aeroplane/DeleteAeroplane";

it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <DeleteAeroplane />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

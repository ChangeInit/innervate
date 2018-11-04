import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import PostsIndex from './containers/posts_index';
import PostsShow from './containers/posts_show';
import PostsNew from './containers/posts_new';

import postsReducer from './reducers/posts_reducer';

// const root = document.getElementById('root');
const initialState = { ideas: JSON.parse(root.dataset.ideas) };

const reducers = combineReducers({
  ideas: postsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
// history={history} add browser history back into router

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history} >
      <div className="container">
        <Switch>
          <Route path="/" exact component={PostsIndex} />
          <Route path="/ideas/new" exact component={PostsNew} />
          <Route path="/ideas/:id" component={PostsShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Loader from 'containers/Loader';
import PrivateRoute from 'utils/secure/PrivateRoute';
import './App.css';

function App() {
  // Containers
  const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

  // Pages
  const Page404 = React.lazy(() => import('pages/Page404'));
  const Page500 = React.lazy(() => import('pages/Page500'));

  return (
    <Router>
      <React.Suspense fallback={ <Loader /> }>
        <Switch>
          <Route exact path='/404' render={ (props) => <Page404 { ...props } /> } />
          <Route exact path='/500' render={ (props) => <Page500 { ...props } /> } />
          <PrivateRoute path='/' component={ DefaultLayout } />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;

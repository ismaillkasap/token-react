import React, { Suspense } from 'react';
import {
  Redirect, Route, Switch,
} from 'react-router-dom';
import Loader from 'containers/Loader';
import routes from 'routes';
import MainContainer from 'containers/Container';

const DefaultLayout = () => {
  const handleRenderRoute = (route, routeProps) => (<route.component { ...routeProps } />);
  return (
    <div>
      <MainContainer>
        <Suspense fallback={ <Loader /> }>
          <Switch>
            { routes.map((route) => (route.component ? (
              <Route
                path={ route.path }
                key={ `rn-${route.name}` }
                exact={ route.exact }
                render={ (routeProps) => handleRenderRoute(route, routeProps) }
              />
            ) : null)) }
            <Redirect to='/page-404' />
          </Switch>
        </Suspense>
      </MainContainer>
    </div>
  );
};

DefaultLayout.propTypes = {
};

export default DefaultLayout;

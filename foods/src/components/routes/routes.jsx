import { Redirect, Route, Switch } from "react-router-dom";

const Routes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route) =>
        route?.redirect ? (
          <Redirect key="redirect" {...route} to={route.redirect} />
        ) : (
          <Route key={route.path} {...route} />
        )
      )}
    </Switch>
  );
};

export default Routes;

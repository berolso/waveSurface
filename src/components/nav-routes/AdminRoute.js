import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";

/** "Higher-Order Component" for private routes.
 *
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current Admin user and only continues to the
 * route if so. If no user is present, redirects to login form. If not admin redirect to homepage
 */

function AdminRoute({ exact, path, children }) {
  const { currentUser } = useContext(UserContext);  

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  if (!currentUser.isAdmin) {
    return <Redirect to="/" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default AdminRoute;

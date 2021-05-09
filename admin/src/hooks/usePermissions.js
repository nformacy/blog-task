import React from 'react';
import { useAuthProvider } from 'react-admin';

const usePermissions = (params) => {
  const authProvider = useAuthProvider();
  const getPermissions = authProvider.getPermissions;
  const [state, setState] = React.useState({
    loading: true,
    loaded: false,
  });
  React.useEffect(() => {
    getPermissions(params)
      .then(permissions => {
        setState({ loading: false, loaded: true, permissions });
      })
      .catch(error => {
        setState({
          loading: false,
          loaded: true,
          error,
        });
      });
  }, []);
  return state;
};

export default usePermissions;

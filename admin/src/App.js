import React from 'react';
import { Admin, Resource } from 'react-admin';
import authProvider from './authProvider.js';
import jsonServerProvider from 'ra-data-json-server';
import jsonapiClient from "ra-jsonapi-client";

import articleResource from '@/resources/articles.js'
import userResource from '@/resources/users.js'

const articlesResourceProps = {
  list: articleResource.ListResource,
  edit: articleResource.EditResource,
  create: articleResource.CreateResource,
  icon: articleResource.Icon
}

const usersResourceProps = {
  list: userResource.ListResource,
  edit: userResource.EditResource,
  create: userResource.CreateResource,
  icon: userResource.Icon
}

// const dummyDataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => {
  const [token, setToken] = React.useState({});
  const dataProvider = jsonapiClient('http://localhost:3000/api/v1', {
    transformRequest: (data, headers) => {
      if (data !== undefined) {
        headers['Content-Type'] = 'application/vnd.api+json; charset=utf-8';

        return data
      } else {
        return data;
      }
    },
    headers: {
      Accept: 'application/vnd.api+json',
      'content-type': 'application/vnd.api+json; charset=utf-8',
      ...(token || {})
    }
  });

  React.useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('token')) || {})
  }, [localStorage.getItem('token')])

  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="articles"
        {...articlesResourceProps}
      />

      <Resource
        name="users"
        {...usersResourceProps}
      />
    </Admin>
  )
};

export default App;

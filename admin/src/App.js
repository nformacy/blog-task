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

const dummyDataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = jsonapiClient('http://localhost:3000/api/v1', { headers: { Accept: 'application/vnd.api+json' } });

const App = () => {
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

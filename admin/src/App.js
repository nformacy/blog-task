import React from 'react';
import { Admin, Resource } from 'react-admin';
import authProvider from './authProvider.js';
import jsonServerProvider from 'ra-data-json-server';

import { PostList, PostEdit, PostCreate, PostIcon } from '@/resources/posts.js'



const App = () => {
  console.log(authProvider);
  return (
    <Admin
      dataProvider={jsonServerProvider('http://jsonplaceholder.typicode.com')}
      authProvider={authProvider}
    >
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
    </Admin>
  )
};

export default App;

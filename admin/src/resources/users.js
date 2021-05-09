import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, DeleteButton, TextInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';

export const Icon = BookIcon;

export const ListResource = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="email" />
            <TextField source="name" />
            <EditButton basePath="/users" />
            <DeleteButton basePath="/users" />
        </Datagrid>
    </List>
);

const Title = ({ record }) => {
    return <span>User {record ? `"${record.title}"` : ''}</span>;
};

export const EditResource = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="email" />
            <TextInput source="name" options={{ multiline: true }} />
        </SimpleForm>
    </Edit>
);

export const CreateResource = (props) => {
  return (
    <Create title="Create a User" {...props}>
      <SimpleForm>
        <TextInput source="email" />
        <TextInput source="name" />
        <TextInput source="password" options={{ multiline: true }} />
        <TextInput source="password_confirmation" options={{ multiline: true }} />
      </SimpleForm>
    </Create>
  )
};

export default {
  ListResource,
  EditResource,
  CreateResource
}

import * as React from "react";
import { List, SelectInput, ReferenceField, ReferenceInput, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DeleteButton, TextInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';

export const Icon = BookIcon;

export const ListResource = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <TextField source="content" />
            <ReferenceField label="Publisher" source="publisher_id" reference="users">
                <TextField source="email" />
            </ReferenceField>
            <EditButton basePath="/articles" />
            <DeleteButton basePath="/articles" />
        </Datagrid>
    </List>
);

const Title = ({ record }) => {
    return <span>Article {record ? `"${record.title}"` : ''}</span>;
};

export const EditResource = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput multiline source="content" />
        </SimpleForm>
    </Edit>
);

export const CreateResource = (props) => {
  const current_user = JSON.parse(localStorage.getItem('auth')).data;

  return (
    <Create title="Create a Article" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="content" />

        <ReferenceInput label="Publisher" source="publisher_id" reference="users" initialValue={current_user.id}>
          <SelectInput optionText="email" optionValue="id"/>
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
};

export default {
  ListResource,
  EditResource,
  CreateResource
}

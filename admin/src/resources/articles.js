import * as React from "react";
import {
  List,
  SelectInput,
  ReferenceField,
  ReferenceInput,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  DeleteButton,
  TextInput
} from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import usePermissions from '@/hooks/usePermissions.js';

export const Icon = BookIcon;

export const ListResource = (props) => {
  const { permissions } = usePermissions();

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="title" />
        <TextField source="content" />
        <ReferenceField label="Publisher" source="publisher_id" reference="users">
          <TextField source="email" />
        </ReferenceField>
        {
          permissions?.Article?.includes('update') && (
            <EditButton basePath="/articles" />
          )
        }
        {
          permissions?.Article?.includes('destroy') && (
            <DeleteButton basePath="/articles" />
          )
        }
      </Datagrid>
    </List>
  )
};

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
  const current_user = JSON.parse(localStorage.getItem('auth'));

  return (
    <Create title="Create a Article" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="content" />

        {
          current_user?.super_admin && (
            <ReferenceInput label="Publisher" source="publisher_id" reference="users" initialValue={current_user.id}>
              <SelectInput optionText="email" optionValue="id"/>
            </ReferenceInput>
          )
        }
      </SimpleForm>
    </Create>
  )
};

export default {
  ListResource,
  EditResource,
  CreateResource
}

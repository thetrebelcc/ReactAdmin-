import React from 'react';
import { Create,TextInput,SimpleForm,Edit,List, Datagrid, TextField, ReferenceField, EditButton,ReferenceInput,SelectInput } from 'react-admin';

export const PostList = props => (
    <List {...props}>
       <Datagrid>
           <TextField source="id" />
             <ReferenceField source="userId" reference="users">
            <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
                      <EditButton />

        </Datagrid>
    </List>
);


export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
           <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
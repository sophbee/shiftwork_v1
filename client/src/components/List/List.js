import React from 'react';
import { List } from 'semantic-ui-react';

const List = ({ children }) => (
    <List divided verticalAlign='middle'>
        {children}
    </List>
);

export default List;
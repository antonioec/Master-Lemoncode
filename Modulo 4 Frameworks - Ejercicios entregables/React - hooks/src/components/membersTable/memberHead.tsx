import * as React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export const MemberHead = () => (
<TableRow>
    <TableCell component="th" scope="row">Avatar</TableCell>
    <TableCell component="th" scope="row">Id</TableCell>
    <TableCell component="th" scope="row">Name</TableCell>
</TableRow>);

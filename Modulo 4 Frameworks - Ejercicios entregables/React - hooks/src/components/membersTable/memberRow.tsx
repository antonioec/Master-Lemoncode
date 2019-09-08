import * as React from 'react';
import { MemberEntity } from '../../model/member';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.StatelessComponent<Props> = props => (
<TableRow>
  <TableCell>
      <img src={props.member.avatar_url} style={{ maxWidth: '10rem' }} />
  </TableCell>
  <TableCell>
      <span>{props.member.id}</span>
  </TableCell>
  <TableCell>      
      <span>{props.member.login}</span>
  </TableCell>
</TableRow>
);

import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';

interface Props { 
  organization: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MembersTableComponent: React.StatelessComponent<Props> = (props: Props) => {
  const [members, setMembers] = React.useState([] as MemberEntity[]);

  const loadMembers = () => {
    memberAPI.getAllMembers(props.organization).then(members => setMembers(members));
  };

  return (
    <div className="row">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Members Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Box style={{padding: 3}}>
          <Input
              placeholder={props.organization}
              onChange={props.onChange}
          />
          <Button variant="outlined" color="secondary" onClick={loadMembers}>Load</Button>
        </Box>
          <Table className="table">
            <TableHead>
              <MemberHead />
            </TableHead>
            <TableBody>
              {members.map((member: MemberEntity) => (
                <MemberRow key={member.id} member={member} />
              ))}
            </TableBody>
          </Table>
    </div>
  );
};

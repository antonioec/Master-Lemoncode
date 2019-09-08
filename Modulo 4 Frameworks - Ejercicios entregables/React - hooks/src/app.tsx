import * as React from 'react';
import { MembersTableComponent } from './components';

export const App = () => {
    const [organization, setOrganization] = React.useState('Lemoncode')

    const setOrganizationState = (event : React.ChangeEvent<HTMLInputElement>) => {
        setOrganization(event.target.value)
    }

    return <MembersTableComponent organization={organization} onChange={setOrganizationState}/>;
}
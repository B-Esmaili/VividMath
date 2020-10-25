import styled from 'styled-components';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const LayoutRoot = styled.div`
  
`;

const Layout = ({
    children
}) => {

    return <LayoutRoot>
        <ProSidebar rtl={true}>
            <Menu iconShape="square">
                <MenuItem icon={<span>gem</span>}>Dashboard</MenuItem>
                <SubMenu title="Components" icon={<span>hearth</span>}>
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
        {
            children
        }
    </LayoutRoot>
}

export {
    Layout as default
}
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, MenuItem } from '../../components/layout';


class MenuRouting extends React.Component {
    render() {
        console.log(this.props.children)
        return (
            <div>
                <Menu onSelect={this.onSelect}>
                <MenuItem text="Home" data={{ route: '/home' }} />
                    <MenuItem text="Products" data={{ route: '/products' }} />
                    <MenuItem text="About" data={{ route: '/about' }} parent>
                        <MenuItem text="Team" data={{ route: '/about/team' }}/>
                    </MenuItem>
                </Menu>
                <div style={{ padding: 10 }}>{this.props.children}</div>
            </div>
        );
    }

    onSelect = (event) => {
        this.props.history.push(event.item.data.route);
    }
}

export default withRouter(MenuRouting);
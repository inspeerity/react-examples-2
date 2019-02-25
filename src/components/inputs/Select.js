import { withStyles } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { Component } from 'react';

import { CSS } from '../../constants';

const styles = theme => ({
    input: {
        cursor: 'pointer',
        width: '100%',
        marginTop: CSS.verticalSpacing,
        marginBottom: CSS.verticalSpacing,
        height: 40,
        fontSize: 14,
        paddingLeft: 25,
        paddingRight: 50,
        borderRadius: 2,
        outline: 'none',
        color: CSS.colors.gray8,
        border: `1px solid ${CSS.colors.gray4}`,
        '&::placeholder': {
            color: CSS.colors.gray5
        },
        '&:focus': {
            borderColor: CSS.colors.lightBlue
        }
    },
    icon: {
        color: CSS.colors.gray6,
        position: 'absolute',
        top: CSS.verticalSpacing + 8,
        right: 18
    }
});

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = { anchorEl: null };
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    itemClicked = value => e => {
        this.setState({ anchorEl: null });

        const name = this.props.name;

        e.target = {name, value};
        this.props.input.onChange(e);
    };

    render() {
        const { anchorEl } = this.state;
        const { classes, input } = this.props;

        const items = this.props.items.map(item => {
            return (
                <MenuItem
                    onClick={this.itemClicked(item.value)}
                    key={item.value}
                >
                    {item.label}
                </MenuItem>
            );
        });

        return (
            <React.Fragment>
                <div style={{ position: 'relative' }}>
                    <input
                        readOnly
                        {...input}
                        onClick={this.handleClick}
                        className={classes.input}
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                    />
                    <KeyboardArrowDownIcon className={classes.icon} />
                </div>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {items}
                </Menu>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Select);

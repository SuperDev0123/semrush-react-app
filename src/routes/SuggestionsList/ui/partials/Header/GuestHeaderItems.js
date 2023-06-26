import React, { useEffect, useState } from 'react'
import { Box, Drawer, Hidden, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { RiLoginCircleLine } from 'react-icons/ri'
import { FaWpforms } from 'react-icons/fa'
import { browserRoutes } from '@src/common/browserRoutes'

import { AppBar, Button } from '../../components'

import useHeaderStyles from "./GuestHeaderItems.styles";

const GuestHeaderItems = () => {
    const classes = useHeaderStyles();
    const [isDrawer, setIsDrawer] = useState(false);

    useEffect(() => {
        return () => {
            setIsDrawer(false);
        };
    }, []);
    return (
        <>
            <Box className={classes.header}>
                <Hidden smUp>
                    <IconButton
                        className={classes.root}
                        onClick={() => setIsDrawer(!isDrawer)}
                    >
                        <Menu />
                    </IconButton>
                </Hidden>
                <Drawer
                    anchor="right"
                    open={isDrawer}
                    onClose={() => setIsDrawer(false)}
                >
                    <Box className={classes.menuItems}>
                        <Link
                            className={classes.menuLinks}
                            to={browserRoutes.SIGN_UP()}
                        >
                            <FaWpforms className={classes.menuIcon} />
                            Sign up now
                        </Link>
                        <Link
                            className={classes.menuLinks}
                            to={browserRoutes.SIGN_IN()}
                        >
                            <RiLoginCircleLine className={classes.menuIcon} />
                            Login
                        </Link>
                    </Box>
                </Drawer>
                <Hidden xsDown>
                    <Box className={classes.actions}>
                        <Link to={browserRoutes.SIGN_UP()}>
                            <Button className={classes.button} mx={2}>
                                Sign up now
                            </Button>
                        </Link>
                        <Link to={browserRoutes.SIGN_IN()}>
                            <Button
                                className={classes.button}
                                variant="outlined"
                            >
                                Login
                            </Button>
                        </Link>
                    </Box>
                </Hidden>
            </Box>
        </>
    );
};

export default GuestHeaderItems;

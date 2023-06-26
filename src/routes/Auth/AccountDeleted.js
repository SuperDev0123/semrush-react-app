import React from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import clsx from "clsx";

import { useHistory } from "react-router";
import { deletedAccountStyle } from "./styles";
import { browserRoutes } from "@src/common/browserRoutes";

const AccountDeleted = ({}) => {
    const classes = deletedAccountStyle();
    const history = useHistory();
    return (
        <Paper className={clsx(classes.root)}>
            <Box className={classes.imageContainer}>
                <img
                    className={classes.image}
                    src="/images/icons/user-delete-confirm.svg"
                    alt="user delete icon"
                />
            </Box>
            <Typography className={classes.title}>Account Deleted</Typography>
            <Typography className={classes.subTitle}>
                Hi, we are sorry to hear that you are leaving us alone here. See
                you in the near future. Please remember that we are still here
                waiting for you. Hope the best for you.
            </Typography>
            <Typography className={classes.description}>
                Changing your mind? You can always create a new account on Poll
                the People App.
            </Typography>
            <Button
                className={classes.primaryBtn}
                fullWidth
                onClick={() => {
                    history.push(browserRoutes.SIGN_UP());
                }}
            >
                Create an Account
            </Button>
            <Typography className={classes.thankyouNote}>
                Thank you for choosing Poll the People
            </Typography>
        </Paper>
    );
};
export default AccountDeleted;

import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import DeleteModal from "./DeleteModal";

import useStyle from "../styles/DeleteAccount.style";

const DeleteAccount = ({}) => {
    const [isConfirmDeleteModal, setIsConfirmDeleteModal] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const classes = useStyle();
    return (
        <Box className={classes.container}>
            <Paper className={classes.root}>
                <Typography className={classes.title}>
                    Delete Account
                </Typography>
                <Box>
                    <Typography className={classes.deleteText}>
                        Deleting your account is irreversible. Once its done,
                        your account and all data will be deleted.
                    </Typography>
                </Box>
                <Button
                    className={classes.secondaryButton}
                    onClick={() => {
                        setIsConfirmDeleteModal(true);
                    }}
                >
                    Delete Account
                </Button>
                {isConfirmDeleteModal && (
                    <ConfirmDeleteModal
                        visible={isConfirmDeleteModal}
                        setVisible={setIsConfirmDeleteModal}
                        onDeletePress={() => {
                            setIsConfirmDeleteModal(false);
                            setIsDeleteModal(true);
                        }}
                    />
                )}
                {isDeleteModal && (
                    <DeleteModal
                        visible={isDeleteModal}
                        setVisible={setIsDeleteModal}
                    />
                )}
            </Paper>
        </Box>
    );
};

export default DeleteAccount;

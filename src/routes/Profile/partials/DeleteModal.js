import React from "react";
import {
    Box,
    Typography,
    IconButton,
    Button,
    useTheme,
} from "@material-ui/core";
import { RiCloseLine } from "react-icons/ri";
import { useHistory } from "react-router";

import { browserRoutes } from "@src/common/browserRoutes";
import CustomModal from "../../Components/CustomComponents/Modal";

import useStyle from "../styles/ConfirmDelete.style";

const DeleteModal = ({ visible, setVisible }) => {
    const classes = useStyle();
    const history = useHistory();
    const theme = useTheme();
    const handleClose = () => {
        setVisible(false);
    };

    return (
        <CustomModal
            open={visible}
            handleClose={handleClose}
            size={theme.breakpoints.down("sm") ? "400px" : "500px"}
            className={classes.modal}
            header={
                <Box className={classes.modalHeader}>
                    <Typography className={classes.modalTitle}>
                        Delete my account
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <RiCloseLine size={25} color="#000" />
                    </IconButton>
                </Box>
            }
        >
            <Typography className={classes.description}>
                Are you sure want to delete your account? Please remember that
                you will not be able to undo this action.
            </Typography>
            <Box className={classes.cancelModalActionsBox}>
                <Button
                    onClick={handleClose}
                    className={classes.cancelModalCancelAction}
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        // after delete account successfully
                        history.replace(browserRoutes.ACCOUNT_DELETE());
                    }}
                    className={classes.cancelModalAcceptAction}
                >
                    {/* <When condition={}>
                        <Loader size={25} color="white" />
                    </When>{" "} */}
                    Yes, I'm sure
                </Button>
            </Box>
        </CustomModal>
    );
};

export default DeleteModal;

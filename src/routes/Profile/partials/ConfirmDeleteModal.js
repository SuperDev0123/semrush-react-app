import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    TextField,
    Typography,
    useTheme,
} from "@material-ui/core";
import useStyle from "../styles/ConfirmDelete.style";
import CustomModal from "../../Components/CustomComponents/Modal";

const ConfirmDeleteModal = ({ visible, setVisible, onDeletePress }) => {
    const classes = useStyle();
    const theme = useTheme();
    const [password, setPassword] = useState("");
    return (
        <CustomModal
            open={visible}
            handleClose={() => {
                setVisible(false);
            }}
            size={theme.breakpoints.down("sm") ? "400px" : "500px"}
        >
            <Box className={classes.modalRoot}>
                <Box className={classes.imageSection}>
                    <img
                        src="/images/icons/user-delete-confirm.svg"
                        alt="user confirm delete"
                        className={classes.userIcon}
                    />
                    <Box className={classes.circle} />
                </Box>
                <Box>
                    <Typography className={classes.title}>
                        Deleting your account
                    </Typography>
                    <Typography className={classes.description}>
                        In order to permanently delete your account, please
                        enter your password.
                    </Typography>
                    <>
                        <InputLabel className={classes.controlLabel}>
                            Password
                        </InputLabel>
                        <TextField
                            className={classes.root}
                            value={password}
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            id="outlined-basic"
                            variant="outlined"
                            placeholder={"Enter your Password"}
                            autoComplete="off"
                        />
                    </>
                    <Button
                        className={classes.primaryButton}
                        fullWidth
                        onClick={onDeletePress}
                    >
                        Delete my account
                    </Button>
                </Box>
            </Box>
        </CustomModal>
    );
};
export default ConfirmDeleteModal;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { Box } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: "0.4rem",
        padding: theme.spacing(8, 5, 8),
    },
}));
const CustomModal = ({
    open,
    handleClose,
    header,
    footer,
    children,
    size,
    className,
}) => {
    const classes = useStyles();
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={clsx({
                [classes.modal]: true,
            })}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box
                    className={clsx({
                        [classes.paper]: true,
                        [className]: Boolean(className),
                    })}
                    style={{ width: size || "50%" }}
                >
                    {header && <Box id="transition-modal-title">{header}</Box>}
                    {children}
                    {footer && footer}
                </Box>
            </Fade>
        </Modal>
    );
};

export default CustomModal

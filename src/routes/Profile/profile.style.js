import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        // display: "flex",
        // justifyContent: "center",
    },
    header: {
        position: "fixed",
        zIndex: 999,
        right: 0,
        left: 0,
        top: 0,
        background: "#016AE9",
        color: theme.palette.common.white,
        padding: "22px",
        marginTop: "75px",
        [theme.breakpoints.down("xs")]: {
            marginTop: "67px",
        },
    },
    pageTitle: {
        transition: "all 0.5s",
        width: "89%",
        marginLeft: "auto",
        fontSize: "18px",
        fontFamily: "Poppins",
        [theme.breakpoints.down("sm")]: {
            width: "90%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "98%",
        },
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
        height: "100%",
        width: "80%",
        boxSizing: "border-box",
        transition: "all 0.3s ease",
        marginTop: "47px",
        [theme.breakpoints.down("sm")]: {
            width: "90%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "98%",
        },
        "&div": {
            margin: "0",
        },
    },
}));

export default useStyle;

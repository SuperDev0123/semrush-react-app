import React from "react";
import { Box, InputLabel, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { useField } from "formik";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block !important",
        position: "relative",
        "& > *": {
            margin: 0,
            width: "100%",
            borderRadius: "5px",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#E5E5E5",
            },
            "&:hover fieldset": {
                borderColor: "#E5E5E5",
            },
            "&.Mui-focused fieldset": {
                border: "1px solid black",
                boxShadow: "none",
            },
        },
        "& .MuiInputBase-root ": {},
        "& .MuiOutlinedInput-input": {
            padding: "13.5px 14px",
        },
        "& .MuiInputBase-input": {
            fontFamily: "Poppins Regular",
            fontSize: "14px",
            color: theme.palette.common.black,
        },
        "& .MuiFormControl-root": {
            width: "100%",
        },
    },
    controlLabel: {
        marginBottom: "11px",
        fontSize: "14px",
        fontFamily: "Poppins SemiBold",
        color: theme.palette.common.black,
    },
    formControl: {
        position: "relative",
        flex: 1,
        display: "block",
        marginBottom: "15px",
    },
    errorText: {
        color: "#ff0700",
        fontFamily: "Poppins Regular",
        fontSize: "13px",
    },
}));

// you can not use this component out side the formik context.
const CustomInput = ({
    value = "",
    name,
    onChange,
    placeholder,
    className,
    label,
    errors,
    ...rest
}) => {
    const classes = useStyles();
    const [inputProps, meta] = useField(name);
    const isError = meta.touched && errors && errors[name];
    return (
        <Box className={classes.formControl}>
            <InputLabel className={classes.controlLabel}>{label}</InputLabel>
            <TextField
                className={clsx({
                    [classes.root]: true,
                    [className]: true,
                    ["required"]: isError,
                })}
                value={value}
                onChange={onChange}
                id="outlined-basic"
                variant="outlined"
                placeholder={placeholder || ""}
                error={isError}
                autoComplete="off"
                {...inputProps}
                {...rest}
            />
            {meta.touched && errors && errors[name] && (
                <Typography className={classes.errorText}>
                    {errors[name]}
                </Typography>
            )}
        </Box>
    );
};
export default CustomInput;

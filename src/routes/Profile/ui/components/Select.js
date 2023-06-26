import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { Box, Typography } from "@material-ui/core";
import { useField } from "formik";
import clsx from "clsx";

const BootstrapInput = withStyles((theme) => ({
    root: {
        flex: 1,
        display: "block",
        "label + &": {},
        "& .MuiSelect-select.MuiSelect-select": {
            fontSize: "14px",
            borderRadius: "5px",
            color: theme.palette.common.black,
            paddingRight: 0,
            paddingLeft: "14px",
            width: "calc(100% - 14px)",
        },
    },
    input: (props) => {
        return {
            borderRadius: 4,
            position: "relative",
            backgroundColor: theme.palette.background.paper,
            border:
                props &&
                props.className &&
                props.className.includes("required")
                    ? "1px solid #ff0700"
                    : "1px solid #E5E5E5",
            padding: "10px 0",

            transition: theme.transitions.create([
                "border-color",
                "box-shadow",
            ]),
            fontFamily: "Poppins regular",
            fontSize: "14px",

            "&:focus": {
                borderRadius: 4,
                boxShadow: "0px 0px 3px 0.1rem rgb(0 123 255 / 25%)",
            },
        };
    },
    labelText: {
        fontFamily: "Poppins Bold",
        fontSize: "14px",
    },
}))(InputBase);
const StyledMenuItem = withStyles((theme) => ({
    root: {
        color: theme.palette.common.black,
        fontFamily: "Poppins Regular",
        fontSize: "14px",
        "&:focus": {
            color: theme.palette.common.black,
        },
    },
}))(MenuItem);

const StyledLabel = withStyles((theme) => ({
    root: {
        fontSize: "0.9rem",
        color: theme.palette.common.black,
        fontFamily: "Poppins SemiBold",
        marginBottom: "11px",
        "&.MuiInputLabel-filled.MuiInputLabel-shrink": {
            display: "none",
        },
    },
}))(InputLabel);

const useStyles = makeStyles((theme) => ({
    margin: {
        marginBottom: "15px",
        selectedTextColor: theme.palette.common.black,
        width: "100%",
        "& #select-native": {
            fontFamily: "Poppins",
            color: theme.palette.common.black,
        },
    },
    errorText: {
        color: "#ff0700",
        fontFamily: "Poppins Regular",
        fontSize: "13px",
    },
}));

// you can use this component out side th formik context
const CustomSelect = ({
    options,
    label,
    value,
    name,
    errors,
    handleChange,
    emptyOption = false,
    formControlStyles = {},
    customLabel,
    optionLabelField,
    optionValueField,
    titleField,
    className,
    ...props
}) => {
    const classes = useStyles();
    const [selectProps, { error, touched }, { setValue }] = useField(name);
    const isError = touched && errors && errors[name];
    return (
        <Box
            className={clsx({
                [classes.margin]: true,
                ["form-control"]: true,
            })}
        >
            {label && (
                <StyledLabel
                    id="simple-select-filled-label"
                    htmlFor="name-multiple"
                    className={classes.labelText}
                >
                    {label}
                </StyledLabel>
            )}
            <Select
                labelId="simple-select-filled-label"
                id="simple-select-filled"
                value={value}
                onChange={handleChange}
                input={
                    <BootstrapInput
                        id="name-multiple"
                        className={isError && "required"}
                    />
                }
                variant="outlined"
                MenuProps={{
                    disableScrollLock: true,
                }}
                {...selectProps}
            >
                {emptyOption && (
                    <StyledMenuItem aria-label="None" value="">
                        None
                    </StyledMenuItem>
                )}
                {options !== null &&
                    typeof options !== "undefined" &&
                    options.map((option, index) => (
                        <StyledMenuItem
                            key={index}
                            value={
                                optionValueField
                                    ? option[optionValueField]
                                    : props.customvalue
                                    ? props.customvalue(option.id, option)
                                    : option.id
                            }
                            title={
                                titleField
                                    ? option[titleField]
                                    : props.customTitle
                                    ? props.customTitle(option.id, option)
                                    : option.id
                            }
                        >
                            {customLabel
                                ? customLabel(option)
                                : optionLabelField
                                ? option[optionLabelField]
                                : option.name}
                        </StyledMenuItem>
                    ))}
            </Select>
            {touched && errors && errors[name] && (
                <Typography className={classes.errorText}>
                    {errors[name]}
                </Typography>
            )}
        </Box>
    );
};

export default CustomSelect;

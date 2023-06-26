import React from "react";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    makeStyles,
    withStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {},
    controlLabel: {
        marginBottom: "11px",
        fontSize: "14px",
        fontFamily: "Poppins SemiBold",
        color: theme.palette.common.black,
        "&.Mui-focused": {
            color: theme.palette.common.black,
        },
    },
    formControlLabel: {
        "& .MuiTypography-root": {
            fontFamily: "Poppins Regular",
            fontSize: "14px",
            color: theme.palette.common.black,
        },
    },
}));

const CustomCheckbox = withStyles({
    root: {
        color: "#016AE9",
        "&$checked": {
            color: "#016AE9",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CheckBoxGroup = ({ label, data, value, onChange }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                {label && (
                    <FormLabel
                        component="legend"
                        className={classes.controlLabel}
                    >
                        {label}
                    </FormLabel>
                )}
                <FormGroup>
                    {data.map((component, index) => (
                        <FormControlLabel
                            key={index}
                            className={classes.formControlLabel}
                            control={
                                <CustomCheckbox
                                    checked={
                                        typeof value[component.name] !==
                                        "undefined"
                                            ? value[component.name]
                                            : false
                                    }
                                    onChange={(e) => {
                                        onChange(
                                            e.target.name,
                                            e.target.checked
                                        );
                                    }}
                                    name={component.name}
                                />
                            }
                            label={component.title}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </div>
    );
};

export default CheckBoxGroup;

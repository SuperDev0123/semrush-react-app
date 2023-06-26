import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";

import PageContainer from "@src/@jumbo/components/PageComponents/layouts/PageContainer";
import { MetaProvider } from "@src/common/components";
import ProfileDetails from "./partials/ProfileDetails";
import ChangePassword from "./partials/ChangePassword";
// import DeleteAccount from "./partials/DeleteAccount";

import useStyle from "./profile.style";

const Profile = () => {
    const classes = useStyle();
    const [apiError, setApiError] = useState({});
    return (
        <MetaProvider title="Profile">
            <Box className={classes.root}>
                <Box className={classes.header}>
                    <Typography className={classes.pageTitle}>
                        My Profile
                    </Typography>
                </Box>
                <Box className={classes.content}>
                    <PageContainer>
                        <ProfileDetails setApiError={setApiError} />
                        <ChangePassword setApiError={setApiError} />
                        {/* <DeleteAccount setApiError={setApiError} /> */}
                    </PageContainer>
                </Box>
            </Box>
        </MetaProvider>
    );
};

export default Profile;

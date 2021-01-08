export const tokenConfig = async (getState) => {
    try {
        //get token
        const token = getState().userLogin.token;

        //set headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
    } catch (error) {
        console.log(error);
    }
};

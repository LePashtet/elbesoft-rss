import axios from "axios";
export const makeHttpRequest = async ({
                                          ...args
                                      }) => {
    try {
        const response = await axios(args);
        return response;
    } catch (error) {
        const axiosError = error;
        if (axiosError.response) {
            console.error("Axios Error:", axiosError.message);
            throw new Error(axiosError.message);
        } else if (axiosError.request) {
            console.error("Request Error:", axiosError.request);
            throw new Error();
        } else {
            console.error("Server Error:", axiosError.message);
            throw new Error("Something went wrong, please try again.");
        }
    }
};

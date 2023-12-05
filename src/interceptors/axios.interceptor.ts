import {belgsoftApi} from "../api";
import {getValidationError, SnackbarUtilities} from "../utils";

export const AxiosInterceptor = () => {
    belgsoftApi.interceptors.request.use((request) => {
        request.withCredentials = true;

        // Get token from local storage
        const token = localStorage.getItem('token');

        // Add token to headers
        if (token) {
            request.headers['x-token'] = token;
        }

        return request;
    });

    belgsoftApi.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {

            if (error.response) {
                SnackbarUtilities.error(getValidationError(error.response.data.error));
            }

            if (!error.response) {
                SnackbarUtilities.error(getValidationError('ERR_NETWORK'));
            }
            return Promise.reject(error);
        }
    )
}

import {belgsoftApi} from "../api";
import {getValidationError, SnackbarUtilities} from "../utils";

export const AxiosInterceptor = () => {
    belgsoftApi.interceptors.request.use((request) => {
        request.withCredentials = true;

        return request;
    });

    belgsoftApi.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {

            if (error.response) {
                SnackbarUtilities.error(getValidationError(error.response.data.body));
            }

            if (!error.response) {
                SnackbarUtilities.error(getValidationError('ERR_NETWORK'));
            }
            return Promise.reject(error);
        }
    )
}

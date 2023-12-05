import {TypeWithKey} from "../models";

export const getValidationError = (errorCode: string) => {
    const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: 'NETWORK ERROR',

        // Auth errors
        AUTH_ERROR_INCORRECT_PASSWORD: 'AUTH_ERROR_INCORRECT_PASSWORD',
        AUTH_ERROR_CANNOT_REGISTER_USER: 'AUTH_ERROR_CANNOT_REGISTER_USER',
        AUTH_ERROR_CANNOT_LOGIN_USER: 'AUTH_ERROR_CANNOT_LOGIN_USER',
        AUTH_ERROR_INVALID_SESSION: 'AUTH_ERROR_INVALID_SESSION',
        AUTH_ERROR_EMAIL_ALREADY_EXISTS: 'AUTH_ERROR_EMAIL_ALREADY_EXISTS',

    }

    return codeMatcher[errorCode] || "Something went wrong";
}
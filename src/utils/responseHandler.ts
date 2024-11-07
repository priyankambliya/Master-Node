import { isArray } from "lodash"

// SUCCESS response
const prepareNormalResponse = (message: string) => message
const prepareSuccessResponse = (data: any, message: string) => {
    return { data, message, totalRecords: isArray(data) ? data.length : null }
}

// ERROR response
const prepareErrorResponse = (error: string) => error

export { prepareNormalResponse, prepareSuccessResponse, prepareErrorResponse }

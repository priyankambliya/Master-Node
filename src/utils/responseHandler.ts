import { isArray } from "lodash"

const prepareNormalResponse = (message: string) => message
const prepareNormalDataResponse = (data: any) => data
const prepareErrorResponse = (error: string) => error

const prepareSuccessResponse = (data: any, message: string) => {
    return { data, message, totalRecords: isArray(data) ? data.length : null }
}

export { prepareNormalResponse, prepareSuccessResponse, prepareErrorResponse, prepareNormalDataResponse }

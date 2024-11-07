// SERVER MESSAGES //
const SERVER = {
    connection_established: 'SERVER CONNECTION ESTABLISHED SUCCESSFULLY'
}

// APP MESSAGES //
const APP = {
    connection_established: `BOOM..APP WORKING ON PORT: `
}

// DATABASE MESSAGES //
const DB = {
    connection: `MONGODB CONNECTION ESTABLISHED SUCCESSFULLY`
}

// AUTH MESSAGES //
const AUTH = {
    // JWT auth
    token_not_found: 'Auth Token not found',
    token_miss_match: 'Invalid Auth Token',
    token_expired: 'Auth Token Expired'
}

export default { SERVER, APP, DB, AUTH }
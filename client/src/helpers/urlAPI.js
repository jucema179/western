export function getServerUrl() {
    const isDevelopment = process.env.NODE_ENV === 'development'
    return isDevelopment ? 'http://localhost:3001/' : 'http://buildwesternpacific.com:3001/'
}

export default {
  isProduction: process.env.REACT_APP_ENVIROMENT === 'PRODUCTION',
  isStaging: process.env.REACT_APP_ENVIROMENT === 'TEST',
  isDevelopment: process.env.REACT_APP_ENVIROMENT === 'DEVELOPMENT',
  environment: process.env.REACT_APP_ENVIROMENT,
  baseApiUrl: process.env.REACT_APP_BASE_API_URL,
};

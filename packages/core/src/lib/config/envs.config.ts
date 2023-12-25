export default () => ({
  APP: {
    PORT: Number(process.env.PORT),
    MODE: String(process.env.MODE)
  },
  AUTH: {
    JWT_SECRET: String(process.env.JWT_SECRET),
    JWT_EXPIRES_IN: String(process.env.JWT_EXPIRES_IN)
  },
  DB: {
    URL: String(process.env.DB_URL)
  }
});

export enum Mode {
  DEV = 'dev',
  PROD = 'prod'
}

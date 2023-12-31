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
  },
  CLOUDINARY: {
    NAME: String(process.env.CLOUDINARY_CLOUD_NAME),
    KEY: String(process.env.CLOUDINARY_API_KEY),
    SECRET: String(process.env.CLOUDINARY_API_SECRET)
  }
});

export enum Mode {
  DEV = 'dev',
  PROD = 'prod'
}

export default () => ({
  PORT: Number(process.env.PORT),
  CLOUDINARY: {
    NAME: process.env.CLOUDINARY_CLOUD_NAME,
    KEY: process.env.CLOUDINARY_API_KEY,
    SECRET: process.env.CLOUDINARY_API_SECRET
  }
})

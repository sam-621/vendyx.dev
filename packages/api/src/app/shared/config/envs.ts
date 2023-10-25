export default () => ({
  PORT: Number(process.env.PORT),
  CLOUDINARY: {
    NAME: process.env.CLOUDINARY_NAME,
    KEY: process.env.CLOUDINARY_KEY,
    SECRET: process.env.CLOUDINARY_SECRET
  }
})

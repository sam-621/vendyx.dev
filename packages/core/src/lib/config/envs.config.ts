export default () => ({
  PORT: Number(process.env.PORT),
  DB: {
    URL: String(process.env.DB_URL)
  }
});

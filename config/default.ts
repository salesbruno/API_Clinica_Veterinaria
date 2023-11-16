const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

export default {
  port: 8000,

  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.aifrdwu.mongodb.net/?retryWrites=true&w=majority`,
  env: "development",
};

import { sequelize } from "@/lib/db";

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    return "Connection has been established successfully.";
  } catch (error) {
    throw new Error("Unable to connect to the database");
  }
};

export { testConnection };

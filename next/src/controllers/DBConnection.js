import { sequelize } from "@/lib/db";

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    return "Connection has been established successfully.";
  } catch (error) {
    throw new Error("Unable to connect to the database");
  }
};

const syncDataBase = async () =>{

  try {
    await sequelize.sync({force: true})
    return "Database sync"
  } catch (error) {
    throw new Error(error)
  }

}

export { testConnection , syncDataBase };


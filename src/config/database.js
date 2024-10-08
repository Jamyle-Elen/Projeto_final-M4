import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: "sqlite",
  storage: "src/config/database.sqlite.db",
});

database
  .authenticate()
  .then(() => {
    console.log("Sucesso, conectado");
  })
  .catch((error) => {
    console.error("Não conseguiu conectar", error);
  });

  
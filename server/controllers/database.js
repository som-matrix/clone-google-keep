import dotenv from "dotenv";
dotenv.config();
// MongoDB URL
export const connectionUri = `mongodb+srv://testSom:${process.env.DB_PASSWORD}@cluster-rest.map1q.mongodb.net/Cluster-rest?retryWrites=true&w=majority`;

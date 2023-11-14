import { connect } from 'mongoose';
import { config } from 'dotenv';
config();

const dbName = process.env.DB_NAME;
const dbUrl = `${process.env.DB_URL}${dbName}`;


const connectionDb = connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

connectionDb.then(() => {
    console.log('\x1b[32m%s\x1b[0m', `[INFO] Conexão com o MongoDB estabelecida com sucesso em ${dbUrl}`);
}).catch((err) => {
    console.error('\x1b[31m%s\x1b[0m', '[ERROR] Erro ao conectar ao MongoDB:', err.message);
});

export default connectionDb;
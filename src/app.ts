import express from 'express';
import userRoutes from '@src/routes/User/UserRoutes';
import ProfileRoutes from '@src/routes/Profile/ProfileRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', ProfileRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});

const express = require('express');
const app = express();
const sumRoutes = require('./routes/sumRoutes');

app.use(express.json());
app.use('/api/sum', sumRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const connectDB = require('./config/db')

const app = express();

connectDB()

app.use(express.json({extended:false}));

app.get('/', (req, res) => 
    res.json({msg:'Welcome'})
)

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/books', require('./routes/books'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
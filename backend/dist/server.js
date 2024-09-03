"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const user_1 = __importDefault(require("./routes/user"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow requests from this origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
//   allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
// }));
// // Middleware
app.use((0, cors_1.default)({
    origin: 'https://task-2-nu-nine.vercel.app', // Ensure no trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // If you are using cookies for authentication
}));
app.use(body_parser_1.default.json());
// Database connection
mongoose_1.default.connect(process.env.MONGODB_URI, {})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
// Routes
app.use('/api/auth', auth_1.default);
app.use('/api', user_1.default);
app.use('/api/user', user_1.default);
// Test route
app.get('/', (req, res) => {
    res.send('Server is running');
});
app.get('/test', (req, res) => {
    res.send('working');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

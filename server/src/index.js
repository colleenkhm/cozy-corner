import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import travelsRoutes from "./routes/travels.js";

const app = express();
// needed for ES modules __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/api/travels", travelsRoutes);

// serve static images
app.use(
  "/uploads",
  // serve files from the uploads folder on disc
  express.static(path.join(__dirname, "../uploads"))
);

// test route
app.get("/", (req, res) => {
  res.json({ message: "API running" });
});

app.use("/api/travels", travelsRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
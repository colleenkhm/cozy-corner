import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// GET all countries (pins)
router.get("/", (req, res) => {
  const travels = [
    { id: 1, title: "Greece", top: "35%", left: "51%", folder: "greece" },
    { id: 2, title: "Italy", top: "34%", left: "49.5%", folder: "italy" },
    { id: 3, title: "UK", top: "25%", left: "45%", folder: "uk" },
    { id: 4, title: "Ireland", top: "26%", left: "43%", folder: "ireland" },
    { id: 5, title: "New Zealand", top: "85%", left: "93%", folder: "new_zealand" },
    { id: 6, title: "Guatemala", top: "48%", left: "16%", folder: "guatemala" },
    { id: 7, title: "Brazil", top: "70%", left: "30%", folder: "brazil" },
    { id: 8, title: "Germany", top: "28%", left: "48%", folder: "germany" },
    { id: 9, title: "Spain", top: "35%", left: "44%", folder: "spain" },
    { id: 10, title: "Indonesia", top: "64%", left: "78%", folder: "indonesia" },
  ];

  res.json(travels);
});

// GET images for a country
router.get("/:country", (req, res) => {
  const country = req.params.country;

  const dirPath = path.join(process.cwd(), "uploads", country);

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(404).json({ error: "Country not found" });
    }

    const images = files.map(
      (file) => `/uploads/${country}/${file}`
    );

    res.json(images);
  });
});

export default router;
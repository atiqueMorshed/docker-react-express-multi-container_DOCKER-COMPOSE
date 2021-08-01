import express from "express";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      name: "Abdul Bari",
      profession: "Teacher",
    },
    {
      name: "Ulalala",
      profession: "Student",
    },
  ]);
});

app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});

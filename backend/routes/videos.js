import express from "express";
import { upload } from "../config/s3.js";
import Video from "../models/Video.js";

const router = express.Router();

router.post("/upload", upload.single("video"), async (req, res) => {
  const { title, description, uploadedBy } = req.body;
  const newVideo = new Video({
    title,
    description,
    uploadedBy,
    videoUrl: req.file.location,
    thumbnailUrl: "https://via.placeholder.com/300",
  });

  await newVideo.save();
  res.json({ message: "Video uploaded", video: newVideo });
});

export default router;

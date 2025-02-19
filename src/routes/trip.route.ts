import { Router } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const router = Router();
const client = new MongoClient(process.env.MONGODB_URI || "");

router.post("/create", async (req, res) => {
  try {
    // Ensure database connection
    await client.connect();
    
    const collection = client.db("mockDatabase").collection("customerData");

    // Get trip data from the request body
    const tripData = req.body;

    // Insert the trip data into MongoDB
    const result = await collection.insertOne(tripData);

    // Return a success response with the inserted tripId
    res.status(201).json({ 
      message: "Trip created successfully", 
      tripId: result.insertedId 
    });
  } catch (error) {
    console.error("Error inserting trip data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the connection
    await client.close();
  }
});

export default router;
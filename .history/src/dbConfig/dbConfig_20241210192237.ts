import mongoose from "mongoose";
import { connection } from "next/server";

export async function connect(){
	try {
		mongoose.connect(process.env.MONGO_URL!)
		const db = mongoose.connection
		
		db.on('connected', () => {
			console.log('MongoDB connected');
		})
	}catch (error) {
		console.log("Something went wrong in connecting to DB");
		console.log(error);
	}
}
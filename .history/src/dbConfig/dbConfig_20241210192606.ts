import mongoose from "mongoose";

export async function connect(){
	try {
		mongoose.connect(process.env.MONGO_URL!)
		const db = mongoose.connection
		
		db.on('connected', () => {
			console.log('MongoDB connected');
		})

		db.on('error', () => {
			console.log('MongoDB connection error, please make sure db is up and running: ' + err);
		})
	}catch (error) {
		console.log("Something went wrong in connecting to DB");
		console.log(error);
	}
}
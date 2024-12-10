import mongoose from "mongoose";

export async function connect(){
	try {
		mongoose.connect(process.env)
	}catch (error) {
		console.log("Something went wrong in connecting to DB");
		console.log(error);
	}
}
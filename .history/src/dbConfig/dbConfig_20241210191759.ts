import mongoose from "mongoose";

export async function connect(){
	try {
		mongoose
	}catch (error) {
		console.log("Something went wrong in connecting to DB");
		console.log(error);
	}
}
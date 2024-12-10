import { verify } from "crypto";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please provide a username"],
		unique: true
	},
	email: {
		type: String,
		required: [true, "Please provide a email"],
		unique: true
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
		unique: true
	},
	isVerified: {
		type: Boolean,
		default: false
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	forgetPasswordToken: String,
	forgetPasswordTokenExpiry: Date,
	verifToken: String,
	verifTokenExpiry: Date
})

const User = mongoose.mod
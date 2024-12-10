import nodemailer from 'nodemailer'


export const sendEmail = async({email, emailType, userId}) => {
	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false,
			auth: {
				user: "maddison53@ethereal.email",
				pass: "jn7jnAPss4f63QBp6D",
			},
		});

		const mailOptions = {
			from: 'aryanagrawal0096@gmail.com', // sender address
			to: email, // list of receivers
			subject: emailType === '', // Subject line
			text: "Hello world?", // plain text body
			html: "<b>Hello world?</b>", // html body
		}
	} catch (error) {
		
	}
}
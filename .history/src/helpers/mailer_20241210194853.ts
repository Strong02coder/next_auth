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
			to: "bar@example.com, baz@example.com", // list of receivers
			subject: "Hello ✔", // Subject line
			text: "Hello world?", // plain text body
			html: "<b>Hello world?</b>", // html body
		}
	} catch (error) {
		
	}
}
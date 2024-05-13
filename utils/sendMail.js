const nodemail = require("nodemailer");

async function SendMail(email, header,body) {

    try {
        const transporter = await nodemail.createTransport({
            service: "gmail",
            secure: false,
            auth: {
                user: process.env.NODE_EMAIL,
                pass: process.env.NODE_EMAIL_PASSWORD
            },
        });

        await transporter.sendMail({
            from: process.env.NODE_EMAIL,
            to:email,
            subject: header,
            text: body
        });

        console.log("message sent successfully");
        
    } catch (error) {
        console.log("message not sent", error);
    }
    
}

module.exports = {SendMail}
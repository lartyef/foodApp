const nodemail = require("nodemailer");

async function SendMail(header,email,body) {

    try {
        const transporter = await nodemail.createTransport({
            service: "gmail",
            secure: false,
            auth: {
                user: process.env.NODE_MAIL,
                pass: process.env.NODE_PASSWORD
            },
        });

        await transporter.sendMail({
            from: process.env.NODE_MAIL,
            to: email,
            subject: header,
            text: body
        });

        console.log("message sent successfully");
        
    } catch (error) {
        console.log("message not sents", error);
    }
    
}

module.exports = {SendMail}
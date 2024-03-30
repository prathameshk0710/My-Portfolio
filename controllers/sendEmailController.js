const nodemailer = require("nodemailer");


module.exports = sendEmailController = async (req, res)=>{
    try{
        const {email, firstname, lastname, message} = req.body;

        if(!email || !firstname || !lastname || !message)
            return res.status(500).send({
                success: false,
                statusCode: 500,
                error: "Empty fields found!!!",
                message: "All fields are mandatory..."
            })
        const name = firstname+" "+lastname;
        
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
            from: email,
            to: 'cp.kondawale786@gmail.com',
            subject: 'Hello from Nodemailer',
            text: message
          };

            await transporter.sendMail(mailOptions, (error, info) => {
            if(error)
                throw  new Error(error)
            else
                console.log("Mail sent successfully...")
            });

            return res.status(200).send({
                success: true,
                statusCode: 200,
                message: "Mail sent successfully..."
            })
    }catch(err){
        console.log("portfolio controller: ", err);
        return res.status(500).send({
            success: false,
            statusCode: 500,
            error: err,
            message: error.message
        })
    }   
}
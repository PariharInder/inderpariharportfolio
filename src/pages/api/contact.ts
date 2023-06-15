import { mailOptions, transporter } from "@/lib/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST") {
        const data = req.body
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: 'SOMEBODY SENT YOU AN EMAIL USING INDERPARIHAR.CA',
                text: 'email from inderparihar.ca',
                html: `
                <p>Name: ${data.name}</p>
                <p>E-mail: ${data.email}</p>
                <p>Message: ${data.message}</p>
                `
            })

            return res.status(200).json({message: 'Email sent successfully'})
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
    return res.status(400).json({message: 'Bad Request'})
}

export default handler
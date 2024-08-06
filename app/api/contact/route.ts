import { sendEmail } from "@/app/utils/contact.utils"
import { NextApiRequest, NextApiResponse } from "next";

  

   export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log("Received request:", req.body); // Log the received request body

    const sender = {
      name: 'Al Shard',
      address: 'no-reply@exemple.com'
     }
  
     const receipients = [{
      name: 'Wassim Abouda',
      address: 'med.wassim.abouda@gmail.com'
     }]
     
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

   const { name, email, message } = req.body;

   try {
    const result = await sendEmail({
        sender,
        receipients,
        subject: `New Contact Form Submission from ${name}`,
        message: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    })

    return Response.json({
      accepted: result.accepted,
    })
   } catch (error) {
    return Response.json(null, { statusText: 'Unable to send message now try again later', 
      status: 500 });
  }
} 
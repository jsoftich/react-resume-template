import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {name, email, message} = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Set up email data
    const mailOptions = {
      from: email,
      to: 'jsoftich@gmail.com', // Replace with your email address
      subject: 'Resume.JohnSoftich.me Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({status: 'success'});
    } catch (error) {
      res.status(500).json({status: 'error', error: error instanceof Error ? error.message : 'Unknown error'});
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
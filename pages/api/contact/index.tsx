require('dotenv').config()
const sgMail = require('@sendgrid/mail')
const {SENDGRID_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env
sgMail.setApiKey(SENDGRID_API_KEY)

export default async function (req:any, res: any) {
 const {subject, email, message}= req.body
    const msg = {
      to: TO_EMAIL, // Change to your recipient
      from: FROM_EMAIL, // Change to your verified sender
      subject: 'The CRIB Contact Form',
      text: 'New Message from the CRIB',
      html: `<strong>${subject}</strong>,
      <strong>${email}</strong>
      <strong>${message}</strong>,`,
    }
await sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
        res.json({ success: true })
      })
      .catch((error: any) => {
        console.error(error)
      })
    }
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "theia3impact@gmail.com",
    subject: `Nuevo mensaje de contacto de ${name}`,
    text: `
      Nombre: ${name}
      Email: ${email}
      Mensaje: ${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email enviado con éxito" }, { status: 200 })
  } catch (error) {
    console.error("Error al enviar el email:", error)
    return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 })
  }
}


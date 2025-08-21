interface NetlifyEvent {
  httpMethod: string;
  body?: string;
}

import nodemailer from 'nodemailer';

export async function handler(event: NetlifyEvent) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const {
    name,
    email,
    phone,
    company,
    projectType,
    budget,
    message,
    website
  } = JSON.parse(event.body || '{}');

  if (website) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Spam detected' })
    };
  }

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields' })
    };
  }

  const cleanData = {
    name: String(name).trim(),
    email: String(email).trim(),
    phone: String(phone || '').trim(),
    company: String(company || '').trim(),
    projectType: String(projectType || '').trim(),
    budget: String(budget || '').trim(),
    message: String(message).trim(),
  };

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouveau message de ${cleanData.name}`,
      text: `Nom: ${cleanData.name}\nEmail: ${cleanData.email}\nTéléphone: ${cleanData.phone}\nEntreprise: ${cleanData.company}\nType de projet: ${cleanData.projectType}\nBudget: ${cleanData.budget}\nMessage:\n${cleanData.message}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Error sending mail', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message' }),
    };
  }
}

import express from 'express';
import type { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, phone, company, projectType, budget, message, website } = req.body;

  // Honeypot field check
  if (website) {
    return res.status(400).json({ error: 'Spam detected' });
  }

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
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

  console.log('New contact message:', cleanData);
  return res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

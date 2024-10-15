const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 5100; // You can choose any port

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req: { body: { name: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) => {
  const { name, email, message } = req.body;

  const mailerSendApiUrl = 'https://api.mailersend.com/v1/email';
  const apiKey = 'mlsn.b63fb8595aea7f3bb49fd8a71fb22088125200fcafac76f282868ce9e25e0303'; // Replace with your MailerSend API key
  const fromEmail = 'jenniferehodge1@gmail.com'; // Replace with your sender email

  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  const data = {
    'from': {
      'email': fromEmail,
    },
    'to': [
      {
        'email': email,
      },
    ],
    'subject': 'New message from contact form',
    'body': {
      'text': `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    },
  };

  try {
    const response = await fetch(mailerSendApiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    const result = await response.json();
    res.status(response.status).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});

interface NetlifyEvent {
  httpMethod: string;
  body?: string;
}

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

  console.log('New contact message:', cleanData);

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
}

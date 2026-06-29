export default async function handler(req, res) {
  const { from, to } = req.query;
  
  if (!from || !to) {
    return res.status(400).json({ error: 'Missing from or to currency' });
  }

  try {
    const API_KEY = process.env.EXCHANGE_RATE_API_KEY;
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}`
    );
    
    const data = await response.json();
    
    return res.status(200).json({
      conversion_rate: data.conversion_rate,
      from: data.base_code,
      to: data.target_code
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch exchange rate' });
  }
}

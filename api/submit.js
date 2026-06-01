export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  // Referrer check
  const referrer = req.headers["referer"] || req.headers["referrer"] || "";
  const allowedOrigins = ["https://yeshen.tech", "http://localhost:4321", "http://localhost:3000"];
  const allowed = allowedOrigins.some((origin) => referrer.startsWith(origin));
  if (!allowed) {
    return res.status(403).json({ success: false, message: "Forbidden" });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  // Forward to Web3Forms
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: "09be2886-6653-4d51-8581-c31600a0f39f",
      name,
      email,
      message,
      subject: "\u6DF1\u591C\u79D1\u6280 - \u65B0\u7684\u8054\u7CFB\u8868\u5355\u63D0\u4EA4",
      from_name: "\u6DF1\u591C\u79D1\u6280\u5B98\u7F51",
    }),
  });

  const result = await response.json();
  return res.status(response.ok ? 200 : 500).json(result);
}

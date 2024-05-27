const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim())
  : [
      'https://rippio-api.vercel.app',
      'http://localhost:5173',
      'http://localhost:5174',
      'https://rippio.netlify.app',
    ];

const corsOptions = {
  origin: (origin, callback) => {
    allowedOrigins.includes(origin) || !origin
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS').message);
  },
  credentials: true,
};

module.exports = { corsOptions };

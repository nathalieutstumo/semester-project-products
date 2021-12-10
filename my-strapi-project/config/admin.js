module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8f5dc4ad3cb307906c12f2d5a55a7a5f'),
  },
});

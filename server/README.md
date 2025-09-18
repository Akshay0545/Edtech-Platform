Environment variables
---------------------

Create a `.env` file in `server/` with the following keys:

```
# Server
PORT=4000

# MongoDB
MONGODB_URL=mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority

# JWT
JWT_SECRET=replace-with-strong-secret

# Cloudinary
CLOUD_NAME=your-cloud-name
API_KEY=your-cloudinary-api-key
API_SECRET=your-cloudinary-api-secret
FOLDER_NAME=studynotion

# Email (Gmail SMTP)
MAIL_HOST=smtp.gmail.com
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxx
```

Notes
-----
- MAIL_PASS must be a Gmail App Password (2FA required), not your account password.
- Ensure `RAZORPAY_KEY_SECRET` matches the key used to sign payments.
- `FOLDER_NAME` is used for Cloudinary upload folders.


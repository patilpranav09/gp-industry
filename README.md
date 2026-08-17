# GP Industries — Business Website 🌐

A professional business website developed for **GP Industries** to showcase its products, services, and company information.

The project includes a responsive frontend and a Node.js/Express backend that handles contact enquiries, stores submitted messages in MongoDB, and sends email notifications using Nodemailer.

---

## ✨ Features

* 🏢 Business information and company website
* 📦 Product and service presentation
* 📱 Responsive web interface
* 📩 Contact enquiry form
* 🔗 Frontend-to-backend API communication
* 🗄️ Contact messages stored in MongoDB
* 📧 Email notifications using Nodemailer
* 🔐 Environment variables used for sensitive configuration

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* CORS
* dotenv

### Database

* MongoDB
* Mongoose

### Email

* Nodemailer
* Gmail SMTP

### Tools

* Git
* GitHub

---

## 🔄 Contact Enquiry Workflow

The contact form follows this flow:

```text
User submits contact form
          ↓
Frontend sends POST request
          ↓
Express.js API
/api/messages
          ↓
Message received by the API
          ↓
Message stored in MongoDB
          ↓
MongoDB
          ↓
Nodemailer sends email notification
          ↓
Success response returned to frontend
```

---

## 📂 Project Structure

```text
gp-industry/
│
├── Backend/
│   ├── models/
│   │   └── Message.js
│   ├── routes/
│   │   └── messages.js
│   ├── config.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   ├── images/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── package.json
└── package-lock.json
```

---

## ⚙️ Backend Setup

### 1. Clone the repository

```bash
git clone https://github.com/patilpranav09/gp-industry.git
cd gp-industry
```

### 2. Navigate to the backend

```bash
cd Backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `Backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
MAIL_USER=your_email
MAIL_PASS=your_app_password
MAIL_TO=recipient_email
PORT=5000
```

Do not commit the `.env` file or expose credentials publicly.

### 5. Start the backend

```bash
npm start
```

The server runs on:

```text
http://localhost:5000
```

---

## 📩 API Endpoint

### Send Contact Enquiry

```text
POST /api/messages
```

Example request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I would like to know more about your products."
}
```

The submitted enquiry is stored in MongoDB and an email notification is sent using Nodemailer.

---

## 🎯 Project Purpose

This project was developed as a practical business website for **GP Industries**, combining a user-facing website with backend functionality for handling customer contact enquiries.

It provided practical experience with frontend development, REST API handling, MongoDB data storage, server-side development, and email integration.

---

## 🚀 Future Improvements

* Add authentication for administrative access
* Add an admin dashboard for managing enquiries
* Improve form validation and error handling
* Add project screenshots and live demo information

---

## 👨‍💻 Developer

**Pranav Chandrashekhar Patil**

* GitHub: [@patilpranav09](https://github.com/patilpranav09)

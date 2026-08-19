# GP Industries Website

A business website developed for **GP Industries** to showcase the company's products, services, and business information.

I developed the website frontend and implemented the backend functionality for the contact enquiry form. Submitted enquiries are stored in MongoDB and email notifications are sent using Nodemailer.

## Live Website

🌐 [Visit GP Industries Website](https://expo-gpindustries.com/)

## Project Demo

[▶️ Watch GP Industries Website Demo](https://drive.google.com/file/d/1AHxSc_7ZXhfGV6WkMAbYvS9DN6FB4R44/view?usp=sharing)

## Features

- Business and company information
- Products and services showcase
- Responsive website design
- Contact enquiry form
- Frontend-to-backend API integration
- Contact enquiries stored in MongoDB
- Email notifications using Nodemailer
- Environment variables for sensitive configuration

## Technologies Used

**Frontend**
- HTML5
- CSS3
- JavaScript

**Backend**
- Node.js
- Express.js
- CORS
- dotenv

**Database**
- MongoDB
- Mongoose

**Email**
- Nodemailer
- Gmail SMTP

**Tools**
- Git
- GitHub

## How the Contact Form Works

When a visitor submits an enquiry, the request is sent from the frontend to the Express.js backend.

```text
Contact Form
     ↓
Express.js API
     ↓
MongoDB
     ↓
Nodemailer
     ↓
Email Notification

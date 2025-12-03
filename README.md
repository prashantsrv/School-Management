# 🏫 School Management App (Next.js + MySQL)

A simple School Management application built using **Next.js 13 (App Router)**, **MySQL**, and **Tailwind CSS**.  
It allows users to:

- Add a new school  
- Upload school images  
- Store school details in a MySQL database  
- View all schools with images  
- Responsive UI with clean design 

#🚀 Tech Stack

| Technology     | Description |
|----------------|-------------|
| **Next.js 13** | App Router, Server Actions, API Routes |
| **React Hook Form** | Form handling & validation |
| **MySQL** | Database |
| **Tailwind CSS** | UI Styling |
| **Node.js** | Server runtime |
| **File Upload (FormData)** | Upload images to `public/` |

---


## 🛢 Database Setup (MySQL)

Run this SQL in your MySQL database:

```sql
CREATE TABLE school (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200),
  address VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  contact VARCHAR(15),
  email_id VARCHAR(200),
  image VARCHAR(500)
);


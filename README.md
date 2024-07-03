# Technical Assessment

## Setup instructions

Requirements:

- Python 3.10+
- Node.js 18+

1. [Clone](https://github.com/great-dev1/mirtech-assessment) this repository:

```bash
git clone https://github.com/great-dev1/mirtech-assessment.git

2. Install dependencies:

# Django

cd backend

python -m venv venv
# activate the virtual environment
source venv/bin/activate or venv\Scripts\activate
# install the dependencies in the virtual environment
cd backend/blog_project
pip install -r requirements.txt

# Next.js

cd frontend
npm install
```

3. Run the development server:

```bash
# Django
cd backend/blog_project
# python manage.py makemigrations blog
# python manage.py migrate
python manage.py runserver

# Next.js
cd frontend
npm run dev
```

4. You can access the Django API at `http://localhost:8000/api/posts/` and the Next.js app at `http://localhost:3000/`.

**Django administration:**

Access the Django administration at `http://localhost:8000/admin/`:

- username: admin
- password: admin

## About my architectural decisions

1. Backend (Django):
- Use Django's built-in authentication system for user registration, login, and logout.
- Implement a model for Post with necessary fields and relationships.
- Develop RESTful API endpoints using Django Rest Framework for user authentication, CRUD operations for blog posts.
- Enforce permissions to ensure only authenticated users can perform relevant actions.

2. Frontend (NextJS):
- Design a responsive UI using CSS or a CSS framework for a better user experience.
- Use React hooks for local state management, ensuring efficient handling of state within components.
- Integrate with the Django backend API using fetch for data retrieval and updates.
- Implement user authentication on the frontend to interact securely with backend services.
- Use NextJS routing for seamless navigation between different pages of the application.

## Assumptions/Simplifications I made

- For simplicity, I would assume a single deployment environment for both backend and frontend to reduce complexity in managing the application.
- Error handling would focus on basic scenarios initially, with room for enhancement based on specific error types and edge cases encountered during development.
- Initially, the focus would be on building a functional prototype of the blog application. Scalability considerations such as database sharding, caching strategies, or load balancing would be deferred to later stages of development as the user base grows.

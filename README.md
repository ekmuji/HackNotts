# 💳 CreditIQ

> **An AI-powered, full-stack credit score simulator designed to make financial literacy interactive, accessible, and hands-on.**

CreditIQ enables users to build financial confidence by making realistic financial decisions and instantly seeing how those choices affect a simulated credit score. Every action is accompanied by personalised AI coaching that explains **why** the score changed and recommends practical next steps for improvement.

Rather than relying on static articles, users learn through experimentation and immediate feedback. Built as a production-ready learning platform, CreditIQ demonstrates modern full-stack development, cloud-native deployment, containerisation, CI/CD, and AI integration.

---

# 🚀 Project Architecture

CreditIQ follows a modern cloud-native architecture.

```
                    ┌────────────────────────────┐
                    │        Next.js Frontend     │
                    │ React • TypeScript • Tailwind│
                    └──────────────┬─────────────┘
                                   │
                             HTTPS / REST API
                                   │
                    ┌──────────────▼─────────────┐
                    │     Express.js Backend      │
                    │ JWT • Swagger • AI Service  │
                    └──────────────┬─────────────┘
                                   │
                    ┌──────────────▼─────────────┐
                    │       PostgreSQL Database   │
                    └────────────────────────────┘

                  ▲
                  │
        Cohere API
      (Personalised AI Coaching)

```

---

# 🏗 Development Roadmap

The project is built in sequential phases to reflect real-world software engineering practices.

## Phase 1 — Frontend Foundation

- Initialise Next.js (App Router) with TypeScript
- Build reusable UI components
- Interactive credit score simulator
- Responsive Tailwind interface
- Client-side state management

---

## Phase 2 — Backend & Database

- Express.js REST API
- PostgreSQL database
- JWT authentication
- bcrypt password hashing
- User profiles
- Credit score persistence
- Swagger / OpenAPI documentation

---

## Phase 3 — AI Integration

- Cohere API integration
- Context-aware financial coaching
- Prompt engineering
- Personalised recommendations
- Educational explanations

---

## Phase 4 — Quality & Automation

- Jest unit testing
- React Testing Library
- Supertest API testing
- GitHub Actions CI pipeline

Pipeline:

```
Push
 │
 ▼
GitHub Actions
 │
 ├── Install Dependencies
 ├── Lint
 ├── Unit Tests
 ├── Integration Tests
 └── Build Verification
```

---

## Phase 5 — Containers & Cloud

- Docker
- Docker Compose
- Kubernetes manifests
- AWS ECR
- AWS EKS
- NGINX Ingress
- AWS Application Load Balancer
- Route53

---

# ✨ Features

## 🎮 Interactive Credit Simulator

Simulate realistic financial behaviours including:

- Payment history
- Credit utilisation
- Hard inquiries
- Credit age
- Credit mix
- New credit accounts

Every action updates the simulated score in real time and persists to PostgreSQL.

---

## 🤖 AI Financial Coach

Every decision generates personalised coaching using Cohere.

Examples include:

- Why your score increased or decreased
- Financial concepts behind the change
- Practical advice for improving credit habits

---

## 📚 Learn Centre

Educational modules covering:

- Credit scores
- APR
- Credit utilisation
- Credit reference agencies
- Responsible borrowing
- Financial best practices

---

## 🧠 Interactive Quiz

A built-in knowledge assessment featuring:

- 7 multiple-choice questions
- Instant feedback
- Progress tracking
- Explanations for every answer

---

# 🛠 Technology Stack

| Layer | Technology |
|--------|------------|
| Frontend | Next.js (App Router), React 19, TypeScript, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| Authentication | JWT, bcrypt |
| AI | Cohere API |
| Testing | Jest, React Testing Library, Supertest |
| CI/CD | GitHub Actions |
| Containers | Docker, Docker Compose |
| Orchestration | Kubernetes |
| Cloud | AWS EKS, ECR, ALB, Route53 |

---

# 🎯 Skills Demonstrated

This project showcases practical experience across modern software engineering disciplines.

## 💻 Full Stack Development

- React
- Next.js
- TypeScript
- Express.js
- REST APIs
- PostgreSQL
- Authentication
- Responsive UI development
- Secure API development

---

## 🤖 AI Application Development

- LLM API integration
- Prompt engineering
- Context-aware AI responses
- Educational AI assistant design

---

## 🗄 Database Engineering

- PostgreSQL schema design
- Relational modelling
- CRUD operations
- Persistent user data
- Database migrations

---

## ☁ Cloud Engineering

- AWS Elastic Kubernetes Service (EKS)
- Elastic Container Registry (ECR)
- Route53
- Application Load Balancer
- Container image deployment

---

## 🐳 Containerisation

- Docker
- Docker Compose
- Multi-container applications
- Environment configuration
- Service networking

---

## ☸ Kubernetes

- Deployments
- Services
- ConfigMaps
- Secrets
- Ingress
- Rolling updates
- Production-ready manifests

---

## 🌐 Networking

Demonstrates practical networking concepts including:

- Reverse proxies
- HTTP/HTTPS
- DNS
- Load balancing
- TLS
- API communication
- Container networking
- Kubernetes networking

---

## ⚙ CI/CD

GitHub Actions pipeline featuring:

- Automatic dependency installation
- Linting
- Testing
- Build verification
- Pull request validation

---

# 🚦 Getting Started

## Prerequisites

- Docker
- Docker Compose
- Anthropic API Key

For cloud deployment:

- AWS CLI
- kubectl
- AWS Account

---

## Local Development

Clone the repository.

```bash
git clone https://github.com/yourusername/creditiq.git

cd creditiq
```

Create environment files.

```bash
echo "ANTHROPIC_API_KEY=your_key" > .env.frontend

echo "JWT_SECRET=your_secret" > .env.backend
```

Run the full stack.

```bash
npm.cmd install

npm.cmd run dev
```


```bash

docker compose up --build
```

Application URLs:

Frontend

```
http://localhost:3000
```

Backend

```
http://localhost:4000
```

Swagger

```
http://localhost:4000/api-docs
```

---

# ☁ Kubernetes Deployment

Deploy the application.

```bash
kubectl apply -f k8s/configmap.yaml

kubectl apply -f k8s/secret.yaml

kubectl apply -f k8s/postgres-deployment.yaml

kubectl apply -f k8s/backend-deployment.yaml

kubectl apply -f k8s/frontend-deployment.yaml

kubectl apply -f k8s/ingress.yaml
```

Check deployment.

```bash
kubectl get pods
```

---

# 🧪 Testing

Run all tests.

```bash
npm test
```

Frontend only.

```bash
npm run test:frontend
```

Backend only.

```bash
npm run test:backend
```

---

# 🗺 Roadmap

## Planned Features

- [ ] Credit score history charts
- [ ] Scenario-based learning journeys
- [ ] Infrastructure as Code (Terraform)
- [ ] Redis caching
- [ ] Email notifications
- [ ] User achievements & gamification
- [ ] Mobile application
- [ ] AI budgeting assistant
- [ ] Open Banking integration
- [ ] Financial goal tracking

---

# 📚 Learning Outcomes

CreditIQ demonstrates experience in:

- Full-stack web development
- AI application development
- Cloud deployment
- Containerisation
- Kubernetes
- CI/CD
- Networking fundamentals
- Authentication & security
- Database design
- API development
- Testing & automation
- Production software architecture

---

# ⚠ Disclaimer

CreditIQ is an educational platform and **does not provide financial advice**.

The credit score calculations are simplified simulations designed to teach financial concepts and do **not** replicate the proprietary scoring algorithms used by credit reference agencies such as Experian, Equifax, or TransUnion.
## Student DevOps CI/CD Project (Node.js + Spring Boot)

## Academic Information
**College**: College of Computing and Informatics, Putrajaya Campus  
**Semester**: Semester 2 2025/2026  
**Course**: DevOps: Tools and Technologies (CSEB5143)  
**Assignment**: Class Project

**Programme**: Bachelor of Software Engineering (Hons.)  
**Project Title**: Build, Containerize and Deploy a Simple Web Application Using CI/CD Pipeline  

**Lecturer**: Ts. Dr. Mohd Hazli Bin Mohamed Zabil  

---

## Student Information

| No. | Full Name | Student ID | Section |
|-----|----------|-----------|--------|
| 1 | Arifah Nur Iman Binti Mohd Fadzilah | BSW01085214 | 01AT |

---

## Project Overview
This project demonstrates a complete CI/CD pipeline for both a **Node.js web application** and a **Java Spring Boot REST API** using industry-standard DevOps tools: **GitHub**, **Jenkins**, **Docker**, and **Kubernetes (Minikube)**.

The objective is to automate the build, containerization, and deployment process so that every code change pushed to GitHub triggers Jenkins to rebuild and redeploy the applications seamlessly.

---

## Tools Used
This project integrates several DevOps tools to achieve automation and scalability:

### GitHub
- Acts as the central repository for source code, Jenkinsfile, Dockerfile and Kubernetes manifests.
- Provides version control and collaboration features.

### Jenkins
- Automates the CI/CD pipeline.
- Executes stages: Clone, Build, Test, Docker Build, Run Container and Deploy to Kubernetes.
- Ensures consistency and reduces manual intervention.

### Docker
- Containerizes the Node.js application.
- Packages dependencies and environment into a portable image (`student-app:latest`).
- Guarantees consistent behavior across different systems.

### Kubernetes (Minikube)
- Orchestrates deployment of the application.
- Runs multiple replicas of the app pods for scalability.
- Exposes the application externally via NodePort service (port 30080).

---

## CI/CD Pipeline
The Jenkins pipeline automates the following stages:

1. **Clone Repository** – Fetch latest code from GitHub.  
2. **Build** – Install Node.js dependencies with `npm install`.  
3. **Test** – Placeholder stage (can be extended with unit tests).  
4. **Docker Build** – Build container image using Dockerfile.  
5. **Run Container** – Start container locally for validation.  
6. **Deploy to Kubernetes** – Apply deployment and service manifests to Minikube.

---

## Repository Structure

```text
BSW01085214_ClassProject/
│
├── app.js                # Node.js application code
├── package.json          # Dependencies and scripts
├── Dockerfile            # Docker image build instructions
├── Jenkinsfile           # CI/CD pipeline definition
├── README.md             # Project documentation
│
├── k8s/                  # Kubernetes configs
│   ├── deployment.yaml   # Deployment definition (2 replicas)
│   └── service.yaml      # Service definition (NodePort)
```

---

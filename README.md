# Simple Life - MERN Stack on Kubernetes

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application, containerized with Docker and deployed using Kubernetes. It is ready for deployment on Render or any cloud Kubernetes provider.

## Features
- Dockerized backend and frontend
- MongoDB with persistent storage
- Kubernetes manifests for all services
- Ingress for cloud access
- Secrets for sensitive configuration

## Local Development
- Use Docker Compose or Minikube for local testing

## Cloud Deployment
- Push Docker images to Docker Hub
- Deploy manifests to a Kubernetes cluster (e.g., Render)
- Update `k8s/frontend-ingress.yaml` with your Render-provided domain

## Seeding the Database
To seed the database, run:
```
kubectl exec -it <backend-pod-name> -- node seeder.js
```

## License
MIT

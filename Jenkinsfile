pipeline {
    agent any
    
    environment {
        IMAGE_BACKEND = "gnanesh2005/simple-life-backend:latest"
        IMAGE_FRONTEND = "gnanesh2005/simple-life-frontend:latest"
    }
    
    stages {
        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $IMAGE_BACKEND .'
                sh 'docker build -t $IMAGE_FRONTEND ./frontend'
            }
        }
        
        stage('Push Docker Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: '423a0696-954c-48ac-9e04-94edc1613772', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push $IMAGE_BACKEND'
                    sh 'docker push $IMAGE_FRONTEND'
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
} 
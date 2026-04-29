pipeline {
    agent any
    description 'CI/CD pipeline for student-app: builds Node.js app, runs tests, creates Docker image, and deploys container on port 5000'

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Gwigle/BSW01085214_ClassProject.git'
            }
        }
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'echo No tests implemented'
            }
        }
        stage('Docker Build') {
            steps {
                bat 'docker build -t student-app .'
            }
        }
        stage('Run Container') {
            steps {
                bat 'docker run -d -p 5000:3000 student-app'
            }
        }
    }
    post {
        success { echo 'Pipeline completed successfully!' }
        failure { echo 'Pipeline failed. Check logs.' }
    }
}

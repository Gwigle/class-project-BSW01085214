pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Gwigle/class-project-BSW01085214.git'
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

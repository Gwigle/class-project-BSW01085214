pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Gwigle/BSW01085214_ClassProject.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "No tests implemented"'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t student-app .'
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 5000:3000 student-app'
            }
        }
    }
    post {
        success { echo 'Pipeline completed successfully!' }
        failure { echo 'Pipeline failed. Check logs.' }
    }
}

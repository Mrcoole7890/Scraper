pipeline {
  agent {
    docker {
      image 'node:20.12-alpine'
      args '-p 3000:3000 -u root:root'
    }

  }
  parameters {
    base64File 'envFile'
  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        withFileParameter('envFile') {
          sh 'cat $envFile'
          sh 'npm test'
        }
      }
    }

  }
  environment {
    CI = 'true'
  }
}
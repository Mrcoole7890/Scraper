pipeline {
  agent {
    docker {
      image 'node:20.12-alpine'
      args '-p 3000:3000 -u root:root'
    }
  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
        sh 'touch .env'
        sh 'cat "$ENV_FILE" > .env'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Execute') {
      steps {
        sh 'cat .env'
        sh 'node publisher.js'
      }
    }

  }
  environment {
    CI = 'true'
    ENV_FILE = credentials("PUBLISHER_ENV")
  }
}
pipeline {
  agent { label 'dind' }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/Talsadoom51/chuck_citations-front.git', branch: 'main'
      }
    }

    stage('Install & Test') {
      steps {
        sh '''
        npm install
        npm run test
        '''
      }
    }

    stage('Build Docker Image') {
      steps {
        sh '''
        docker build -t mon-registry/chuck-front:latest .
        docker push mon-registry/chuck-front:latest
        '''
      }
    }

    stage('Deploy') {
      steps {
        sh '''
        ssh vagrant@prod "docker pull mon-registry/chuck-front:latest && docker restart chuck_front"
        '''
      }
    }
  }
}

pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE_NAME = 'tp_6'
        DOCKER_TAG = "1.${env.BUILD_NUMBER}"
        CONTAINER_NAME = 'tp_6-React'
        DOCKERHUB_REPO = 'lean2026/tp_6'
    }
    
    stages {
        stage('Build') {
            steps {
                script {
                    // Construir la imagen Docker
                    sh "docker build -t $DOCKER_IMAGE_NAME:$DOCKER_TAG ."
                }
            }
        }
        stage('Run') {
            steps {
                script {
                    // Detener y eliminar el contenedor si ya existe
                    sh "docker stop $CONTAINER_NAME || true"
                    sh "docker rm $CONTAINER_NAME || true"
                    
                    // Ejecutar el contenedor
                    sh "docker run -d --name $CONTAINER_NAME -p 3000:80 $DOCKER_IMAGE_NAME:$DOCKER_TAG"
                }
            }
        }
        stage('Check Container Status') {
            steps {
                script {
                    def containerStatus = sh(script: "docker ps --filter 'name=nombre_del_contenedor'", returnStatus: true)
                    if (containerStatus == 0) {
                        currentBuild.result = 'SUCCESS'
                        echo 'El contenedor está en ejecución.'
                    } else {
                        currentBuild.result = 'FAILURE'
                        error 'El contenedor no está en ejecución.'
                    }
                }
            }
        }
        stage('Publish to DockerHub') {
            steps {
                script {
                    // Iniciar sesión en DockerHub
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                        sh "docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD"
                    }
                    
                    // Subir la imagen a DockerHub
                    sh "docker tag $DOCKER_IMAGE_NAME:$DOCKER_TAG $DOCKERHUB_REPO:$DOCKER_TAG"
                    sh "docker push $DOCKERHUB_REPO:$DOCKER_TAG"
                }
            }
        }
    }
}

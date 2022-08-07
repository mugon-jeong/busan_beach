def ecrLoginHelper="docker-credential-ecr-login"

def region="ap-northeast-2"

def ecrUrl="688947791751.dkr.ecr.ap-northeast-2.amazonaws.com"

def repository="busan-beach"

def deployHost="172.31.35.43"

pipeline {
    agent any
    stages {
        stage('Pull Codes from Github'){
            steps{
                checkout scm
            }
        }
        stage('Build Codes') {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage('Build Docker Image by Jib & Push to AWS ECR Repository') {
            steps {
                withAWS(region:"${region}", credentials:"aws-key") {
                    ecrLogin()
                    sh """
                    curl -O https://amazon-ecr-credential-helper-releases.s3.us-east-2.amazonaws.com/0.4.0/linux-amd64/${ecrLoginHelper}
                    chmod +x ${ecrLoginHelper}
                    mv ${ecrLoginHelper} /usr/local/bin/
                    docker-compose build
                    docker push ${ecrUrl}/${repository}:${currentBuild.number}
                    """
                }
            }
        }
        stage('Deploy to AWS EC2 VM'){
            steps{
                sshagent(credentials : ["deploy-key"]) {
                        sh "ssh -o StrictHostKeyChecking=no ubuntu@${deployHost} \
                        'aws ecr get-login-password --region ${region} | docker login --username AWS --password-stdin ${ecrUrl}/${repository}; \
                        docker run -d -p 80:80 -t ${ecrUrl}/${repository}:${currentBuild.number};'"
                }

            }

        }
    }
}
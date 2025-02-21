To start jenkins    
    #docker compose up -d
For the first Admin password needed during setup
    #docker exec jenkins-app-1 cat //var/jenkins_home/secrets/initialAdminPassword
To stop jenkins
    #docker compose down

Go through the below doc on running Jenkins using docker
https://www.jenkins.io/doc/book/installing/docker/#setup-wizard
docker-compose.yml has been created to take care of all docker run steps mentioned in the Jenkins doc.
# Basic Jenkins CI/CD Pipeline (For NodeJs Backend)
Requirement for this project
  - docker 
  - dockerhub account
  - aws ec2
  - jenkins basics

## follow these steps
  - Launch ec2 instance
  - Install  jenkins by pasting theese commands
```
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
```

 - setup jenkins username and password
 - install docker and docker-compose
 ```
 sudo apt-get install docker.io
 sudo apt-get install docker compose
 ```
 - setup dockerhub credentials in jenkins
 - click on manage jenkins

## Setup dockerhub credentials on jenkins

 -  manage jenkins

 ![manage jenkins](./readmeImages/Screenshot%202024-10-08%20152603.png)

 - credentials

 ![credentials](./readmeImages/Screenshot%202024-10-08%20152618.png)

 - global

 ![global](./readmeImages/Screenshot%202024-10-08%20152633.png)

 - add credentials

 ![add credential](./readmeImages/Screenshot%202024-10-08%20152645.png)

- follow this

![follow](./readmeImages/Screenshot%202024-10-08%20152722.png)

- clone this repo
- edit jenkinsfile replace credentialId with  your credentialId, replace git url and image name

![jenkinsfile](./readmeImages/Screenshot%202024-10-08%20153604.png)

## setup docker-compose file
 - replace image name with your docker hub image

## Setup Jenkins Pipeline

  - Click on new item


![New Item](./readmeImages/Screenshot%202024-10-08%20154207.png)
![New Item](./readmeImages/Screenshot%202024-10-08%20154219.png)

 - Click on pipeline script from scm

![New Item](./readmeImages/Screenshot%202024-10-08%20154233.png)

- Enter your repo url and set main/master branch(according to your branch)
![New Item](./readmeImages/Screenshot%202024-10-08%20154318.png)
![New Item](./readmeImages/Screenshot%202024-10-08%20154333.png)

<h1> </h1>
<h1 style="text-align:center">Thank You!!</h1>
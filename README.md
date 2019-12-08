# Deploy a Startup in two hours

## This project is for anyone that wants to start playing with Docker.

At freeCodeCamp you have the post [How to Plan, Code, and Deploy Your Startup Idea in a Single Weekend](https://www.freecodecamp.org/news/plan-code-and-deploy-a-startup-in-2-hours/) With a two hours video.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=lauywdXKEXI
" target="_blank"><img src="http://img.youtube.com/vi/lauywdXKEXI/0.jpg" 
alt="Plan, Code, and Deploy a Startup in 2 Hours [Full Stack JavaScript Tutorial]" width="480" height="360" border="10" /></a>

---

### **I added to the project:**

1. Dockerfiles
    - Dockerfile for the server is in /
    - Dockerfile for react is in /client
2. Compose-docker file in /
    - Where everything comes together.
3. Two changes in the code.

/client/src/App.js

```javascript
6 async function fetchJobs(updateCB) {
7    const res = await fetch('http:jr-job.deeplearningerp.com:3001/jobs');
```

/api/index.js

```javascript
15 res.header('Access-Control-Allow-Origin', 'http://jr-job.deeplearningerp.com');('http:jr-job.deeplearningerp.com:3001/jobs');
```

---

## Instructions

1. Change the domain http://jr-job.deeplearningerp.com by http://localhost (locally) or your own domain if you plan to deploy in the cloud.
2. You only need a cheap Virtual Machine. It will work in any provider, and you only need to install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) ei to install in Centos - sudo yum install git. Install Docker y [docker compose](https://docs.docker.com/compose/install/)
3. git clone https://github.com/miguedep/Deploy-a-Startup-in-2-Hours.git
4. cd Deploy-a-Startup-in-2-Hours
5. docker-compose -f "docker-compose.yml" up -d --build
6. If you want to stop the containers exec docker-compose down.
7. ## Don't forget to open the ports. You can see my ports in the picture below.

![Security Groups config](https://github.com/miguedep/Deploy-a-Startup-in-2-Hours/blob/master/images/sg.png "Security Groups config")

It can be done with AWS free tier so it will cost \$0 if you choose an EC2 (t2.micro)
My deployment in AWS - http://jr-job.deeplearningerp.com

Note: This is not a secure deployment. It was made for learning purposes, so people can play with docker and deploy it in the cloud.

Thanks freeCodeCamp!

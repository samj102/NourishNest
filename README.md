<p align="center">
  <a href="">
    <img src="https://upload.brndn.ly/u/6teAbe.png" alt="Logo" width=150>
  </a>
</p>

<h1 align="center">Nourish Nest</h1>

  <p align="center" >
    <i>Meal planning has never been so easy.</i>
    <br>
  </p>


<p align="center">
    A CPS731 Project
    <br>
    Fall 2023
    <br>
    Toronto Metropolitan University
</p>

<br/>
# Installation
## Prerequisites
- [Node.js](https://nodejs.org/en/) (v17.4.0)
- [Python](https://www.python.org/downloads/) (v3.12.0)

## Setup
1. Clone the repository `git clone https://github.com/F2023-CPS731-Team6/NourishNest.git`
2. Install the frontend dependencies
    1. `cd frontend/nourishnest`
    2. `npm install`
3. Install the backend dependencies
    1. `cd backend`
    2. `pip install -r requirements.txt`

<br/>

# Development Server
## Frontend
1. `cd frontend/nourishnest`
2. `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. Make changes to the code and the page will reload automatically.

## Backend
1. `cd backend/nourishnest`
2. `python manage.py runserver`

<br/>

# Deployment
## Frontend
1. `cd frontend/nourishnest`
2. `npm run build`
3. `npx serve -s build`
    - Deploys the server to the local network on port 3000

## Backend
1. `cd backend/nourishnest`
2. `python manage.py runserver 0:0:0:0:8000`
    - Deploys the server to the local network on port 8000


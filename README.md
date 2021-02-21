# CoursaTech API - Blog + JWT Authentication System

![alt text](https://github.com/garoot/CoursaTech-ng/blob/main/Angular-DRF-Auth.jpg)

## Core Concepts Applied in this Project
### Django RESTful Framework (DRF)
- Server-side setup
- Models Development
- RESTful API development using DRF
- Backend URL routing
- Utilizing generec API views
- Integration of JWT authentication in the backend
- Setting up backend ports to frontend ports
### Angular 11
- Binding data, events and classes.
- Structural directives (like *ngIf)
- Component interaction
- Dependency injection 
- API fetching 
- Routing & navigation
- Building JWT authentication for frontend
## Quick Setup
### Server-Side Dependencies (Django RESTful Framework):
- install pip (python package manager)
- install vertual environment
- create virtual environment 'venv' within ./CoursaTech-ng 
- activate it using (for windows): .\CoursaTech-ng\venv\Scripts\Activate
- install dependencies (look at ./CoursaTech-ng/Requirements.md)
- create superuser: python manage.py createsuperuser 
- most importantly enter email and password (email will be used as username) 
- run the command: python manage.py makemigrations 
- run the command: python manage.py migrate

#### Run the backend:
- run the command: python manage.py runserver (from within ./CoursaTech-ng)

### Client-Side Dependencies (Angular 11):
- install npm (node package manage)
- look at the setup: https://angular.io/guide/setup-local
- also check package.json (for the dependencies of this project)

#### Run the frontend:
- run the command: npm start (from within ./CoursaTech-ng/project1)
(alternatively, you can run: 'ng start' inside ./CoursaTech-ng/project1)

now go to the browsers visit the link given by Angular, normally this link: http://localhost:4200/

NOTE: you can have admin access by logging in with your superuser credentials at http://localhost:8000/admin to control data



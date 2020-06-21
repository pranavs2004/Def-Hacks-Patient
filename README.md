# Def-Hacks-Patient

It is an app that builds a platform for both doctors and patients to create, edit and cancel appointments. In this special situation, we want to be able to help people to get medical service when we are keeping social distance. 

## Usage

The backend is built in Express.js, and the database is built in MongoDB. The frontend is built in React. To explore the backend, you can do the following: 

To start the server: 

```
git clone git@github.com:pranavs2004/Def-Hacks-Patient.git
```
Then go to the directory by typing this in the terminal: 

```
cd Def-Hacks-Patient
```
Then you should see your terminal shows that you are in that directory. 

Then you can run `npm install` to install all the packages and `npm start` to start the server. Then the server will be running. 

## API

### Auth route

1. post '/auth/login'

A login route will take email and password from the frontend like this: 

```
{
    user: {
        "email": 1@2.com,
        "password": 123456,
        "identity": "doctor"/"patient"
    }
}
```
And if it is success, it will return a token to the front, so user can carry that going through the website.

2. post '/auth/register'

A register route will take data like this from the frontend: 
 username, password, first name, last name, phone number

```
{
    user: {
        username:
        password:
        firstName:
        lastName:
        phoneNumber:
    }
}


```

### Doctor Route

1. GET '/doctors'

This route is used for getting all doctors. 

2. GET '/doctors/:id'

This route is used for get a certain doctor information. 

3. PUT '/doctors/:id'

This route is used for changing doctor information.

4. GET '/doctors/:doctorId/appointments'

This route is used for getting all of the appointments that a doctor has. 

5. POST '/doctors/:doctorId/appointments'

This route is used for creating an appointment that a doctor has. 

6. GET '/doctors/:doctorId/appointments/:appointmentId'

This route is used for reading an appointment that a doctor has. 

7. PUT '/doctors/:doctorId/appointments/:appointmentId'

This route is used for editing an appointment that a doctor has. 

### Patient Route

1. GET '/patients/:id'

This route is used for getting a certain patient's information. 

2. PUT '/patients/:id'

This route is used for changing a certain patient's information. 

3. GET '/:patientId/appointments'

This route is used for creating an appointment that a patient has. 

4. GET '/:patientId/appointments/:appointmentId'

This route is used for reading an appointment that a patient has. 

5. PUT '/:patientId/appointments/:appointmentId'

This route is used for changing an appointment that a patient has. 







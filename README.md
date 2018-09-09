# Airport TEst

Airport test using 
- Node.js [https://nodejs.org]
- Framework Express.js [http://expressjs.com/]
- ORM: Sequelize (Permite utilizar una variedad de DB relacionales, elegir la que más te acomode). [http://docs.sequelizejs.com/]
- Autenticación: Okta [https://developer.okta.com]

## Getting Started

### Clone Repository 

```
git clone https://github.com/AlonsoSalas/airportTest.git

cd airportTest
```

### Install Dependencies

```
npm install
```

### set enviorements in .env (you must create the database, and port 8080 for OKta configs)

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=airport_new
DB_USERNAME=root
DB_PASSWORD=root

PORT=8080

OKTA_CLIENT_ID=0oag6sp11vFlPXWne0h7
OKTA_URL=https://dev-481726.oktapreview.com/oauth2/default/
OKTA_AUTHORIZATION_BASIC_TOKEN=MG9hZzZzcDExdkZsUFhXbmUwaDc6OFhxVWpyRnd1elYwbGluQUNzeS00UjQ2czRrVHdqemlFZnlZVEhMaw==

```

### Run migrations

```
cd source && sequelize db:migrate
```

### Run seeders
```
sequelize db:seed:all
```

## Structure

### Files source
```
.
├── config
|   ├── config.js
|   ├── corsConfig.js 
|   └── db.js 
├── controllers
|   ├── BookingsController.js 
|   ├── FlightsController.js
|   └── OAuthController.js
├── handler
|   └── ErrorHandler.js
├── middleware
|   └── oAuth.js
├── migrations
├── models
|   ├── aircrafts.js
|   ├── airports.js
|   ├── bookings.js
|   ├── flights.js
|   ├── index.js
|   ├── users.js
|   └── userstypes.js
├── routes
|   ├── BookingsRoutr.js
|   ├── FlightRouter.js
|   ├── index.js
|   └── OAuthRouter.js
├── index.js
```
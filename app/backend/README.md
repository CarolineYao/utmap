# How to run
* `npm start` OR `node server.js` OR `nodemon server.js` to run backend endpoint
* `mongod` to start running database (needs to be installed locally at this point)

# Current API Calls
## Locations
`/locations?abb=BA` to GET latitude, longitude, etc. in the following format:
``` 
{  
    abb: "BA",
    latitude: 0.33,
    longitude: 0.56,
    name: "Bahen Centre for Technology" 
}
```

`/locations` with body(x-www-form-urlencoded) to POST a new location 
``` 
{  
    abb: "BA",
    latitude: 0.33,
    longitude: 0.56,
    name: "Bahen Centre for Technology" 
}
```

## Users
`/users` with body(x-www-form-urlencoded) to POST a new user
```
{
    username: "johnwhite",
    password: "password2"
}
``` 

# Notes on Structure
* Database is currently uses the mongoDB default database at port 27017. It uses the `utmap` database
# Example of Endpoint usage

|  Type of call (CRUD) | Info that fe provides | Relevant things in database | Info that BE returns | Database after successful update |
|  ------ | ------ | ------ | ------ | ------ |
|  C (User table) | User_name: "CarolineYao", Password: "123" | N/A | 200 User successfully created<br/> 400 Invalid request body or the email is already registered<br/> 500 Something went wrong | User_name: "CarolineYao", Password: "123" |
|  U(User) - use for updating new fav place | User_name: "CarolineYao", fav: "CH" | User_name: "CarolineYao", Password: "123" | 200 User fav successfully updated<br/> 400 Invalid place<br/> 500 Something went wrong | User_name: "CarolineYao", Password: "123", fav: "CH" |
|  U(User) - use for updating new fav place | User_name: "CarolineYao", fav: "BA" | User_name: "CarolineYao", Password: "123", fav: "CH" | 200 User fav successfully updated<br/> 400 Invalid place<br/> 500 Something went wrong | User_name: "CarolineYao", Password: "123", fav: "BA" |
|  R(User) - use for log in | User_name: "CarolineYao", Password: "122" | User_name: "CarolineYao", Password: "123", fav: "BA" | (valid: False, favorite place: null) <br/> or <br/> 400 (Invalid password/username) | No Update<br/> User_name: "CarolineYao", Password: "123", fav: "BA" |
|  R(User) - use for log in | User_name: "CarolineYao", Password: "123" | User_name: "CarolineYao", Password: "123", fav: "BA" | (valid: True, favorite place: "BA") <br/> | No Update<br/> User_name: "CarolineYao", Password: "123", fav: "BA" |
|  D(User) - use for deleting new fav place | User_name: "CarolineYao", fav: "BA" | User_name: "CarolineYao", Password: "123", fav: "BA" | 200 User fav successfully updated<br/> 400 Invalid place<br/> 500 Something went wrong | User_name: "CarolineYao", Password: "123", fav: null |
|   |  |  |  |  |
|  R (Abbreviation) | abb: "BA" | abb: "BA", latitude: 43.659724, longitude: -79.396774, name: "Bahen Centre for Information Technology" | abb: "BA", latitude: 43.659724, longitude: -79.396774, name: "Bahen Centre for Information Technology", and 4 closest libraries |  |

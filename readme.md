folder structure
------>>src
------->>config
------->>controllers
------->>models
------->>routes
------->>app.js

config
db.js ==>> connction for mongodb to the server (database to server connection)
controllers
notes.controller.js ==>> iske andar saare controller or function perfomr karne ka aata hai
[
createNotesController,
getallNotesControlller,
deletenotesController
]


models
 notes.model.js ==>> iske andar hum table ke attributes or instance likhte hai

app.js
  in this there is all connection of code for the backend controller,model,routes


iske andar humne simple method of mongoose use kari hai CRUD operation ke liye 
find--> saraa data milne
finbyId---->data milna or single update karna
findByIdAndDelete--->data delete karna

yeh sab aaram se kar sakte hai 
iss project mai yehi hai

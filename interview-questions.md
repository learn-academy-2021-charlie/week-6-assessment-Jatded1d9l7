# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

API-
Foreign Key- 

  Your answer: A foreign key is where values in one table must match the values in another table.

  Researched answer: A foreign key is a column in a relational database that links tow tables together and establishing a link between them. 



2. Which RESTful API routes must always be passed params? Why?

  Your answer: Rest= Representational State Transfer 

  Researched answer: Params are used to add more information to a program by passing a value into the route. Show, update, and destroy need to be passed params. 



3. Name three rails generator commands. What is created by each?

  Your answer: Generate commands allow passing information through the command line.

  Rails generate model- allows to creade a new model. The name of the model is uppercase and singular. This allows us to create the collumns of the table. 

  Rails generate migration- migration is a file that allows to make changes to a database. 
  
  rails generate controler Main - generates a new controller. The controller mediates information between the user, views, and the model.

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students The index method to show all items from a table          

method="POST"   /students create method that adds data to the table and allos for new items to be made with certan params.      

method="GET"    /students/new The new method that allows for a new entry in your table.  

method="GET"    /students/2  The show method that allows a item to be called.  

method="GET"    /students/edit/2 Edit method that permits changes to data.    

method="PATCH"  /students/2 this is the update method that allos for edits to be updated.     

method="DELETE" /students/2 This is the destroy method that deletes an item from the table.       



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user I can see everything on my toDo list. 
2. As a user I can add a new taks to my toDo list.  
3. As a user I can edit items on my toDo list. 
4. As a user I can delete items on my toDo list.
5. As a user I can update items to my toDo list.
6. As a user I can navigate between pages of my app.
7. As a user I can check off items on my toDo list
8. As a user I can see tasks that I have completed
9. As a user I can add priority level to my toDo list
10. As a user I can add the time when the task was completed.
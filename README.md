# pokemon-app
This is web application using React-Redux to list all pokemons using REST API and showing the data in web application with all details.
The technology used is REACT-REDUX.

Parcel is used as bundler in this project, In the case of the parcel, we don’t need to specify the configuration in a separate config file after it is installed. We can directly go for running the build process in parcel-bundler and all the other things are managed by parcel on its own.
Babel compiler is used.

To run the project need to go the project folder like below::

C:\Users\Documents\Pokemon-application

and run the command npm start the project will start in http://localhost:1234
open the URL in browser to run the application.

To run the unit test::
run the command npm test that will scan the test file using jest configuration and show the test results.

Scope =>

• Create a web application to list all Pokémon and show paginated results
• User should be shown the Pokémons in a card-based layout
• Each card should contain the image of the Pokémon
    o Name
    o Height
    o Weight 
    o List of abilities.
• User should have option to choose the number of cards available per page available 
options are 10, 20 and 50 - Not completed exactly used react paginate to show the results 10 list per page
• User should be shown previous and next links - on both the top 
and the bottom of the page - Not completed exactly added previous next button of react paginate only
• User should be able to search through the Pokémon list using the name and abilities - able to search by name .
• User should be able to sort the result by name, height and weight.
• Page refresh should maintain the sorting and search related data.
• User should be taken to the details page and present all the information available for 
that Pokémon. The user should have a link to go back to the previous page 
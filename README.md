1.	Drink Finder Page(See below illustration)
	At the initial loading of the page, you should render a random drink from the API above
	user should be able to type a drink name and search it by clicking the search button.
	Previous search names should be saved and displayed under the search input as a clickable element
	By clicking on the previous search, it will trigger the search again with the right results. 
	The search result should be displayed at the drinks list window, each drink is a clickable element
	Each list item will contain: Drink name, category, matching glass icon (at least 3 different icons and default one)
	User can click on a drink name and the full details of the selected drink will be shown in the correct component (See below illustration) 
	Full details will contain most of the information that returned from the API.
•	Name, Category, Glass, Instructions, Ingredients, date (formatted DD-MM-YYYY) and the image
•	By clicking on the image, it will open the image in a modal
	User can filter the drinks
	User will be displayed with an input box and a dropdown above the loaded drinks list. (filter options are category or ingredient)
once user focus out the input or select s different filter option and there is value inside the input box, the drinks list will be refreshed to display only the drinks that contain the entered value.
	User can sort the list of drinks by name (ascending) and date (descending)
	You should use MUI or Bootstrap as your style framework
	You need to use the GRID system

 
2.	Illustration

3.	General Requirements
	Keep your code clean and readable.
	Break your web application into components and containers
	Make sure you design your application state right, choose what to put in local state and what in the application state

4.	Technologies 
	Make sure you have node.js installed on your computer, you can download it from nodejs.org
	React/Angular
	You can use the following guidelines how to start your project
	React - https://github.com/facebook/create-react-app
	Angular - https://angular.io/generated/live-examples/getting-started-v0/stackblitz

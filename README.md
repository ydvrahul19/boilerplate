# boilerplate
PROBLEM STATEMENT: 

Make a small app which demonstrates the topic “useRef hook” in React.
Also write testcases in cypress for that app. 
You should use CRA as a boilerplate for react app.

After the App using that concept is done, copy the whole source code of the app to another folder named boilerplate.
 Remove the bits from the copied code such that the testcases you wrote earlier are failing

SOLUTION:

Firstly here is simple example for use the  'useRef' hook in App.js file in react. 
![image](https://user-images.githubusercontent.com/85828386/218945518-35f768d3-e67a-45a3-8da4-95fd9494afd4.png)

This example demonstrates how to create a reference to an input element and then focus it when a button is clicked.

Now, Install the Cypress testing library:

	$ npm install --save-dev cypress

And write the test cases in Cypress for the above example:

![image](https://user-images.githubusercontent.com/85828386/218946523-b4164e23-4fa1-4ae6-963c-7cf65994650c.png)


To create a React app with Create React App (CRA) and run the test cases, you can follow these steps:

1.Create a new React app with CRA:

 	$ npx create-react-app my-app

	$ cd my-app
	
2.Replace the contents of src/App.js with the code for the Example component.

3.Install the Cypress testing library:

	$ npm install --save-dev cypress

4.Create a file named cypress/e2e/todo.cy.js and add the test cases to it.

5.Open Cypress and run the test cases:

	$ npx cypress open
  
This will open the Cypress test runner, where you can click on the todo.cy.js file to run the tests.

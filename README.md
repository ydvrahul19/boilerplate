# UseRef Hook Boilerplate Assignment

# Boilerplate

PROBLEM STATEMENT: 

Make a small app which demonstrates the topic “useRef hook” in React.
Also write testcases in cypress for that app. 
You should use CRA as a boilerplate for react app.

After the App using that concept is done, copy the whole source code of the app to another folder named boilerplate.
 Remove the bits from the copied code such that the testcases you wrote earlier are failing

SOLUTION:

#Steps 
1.Write the code using CRA. 

2.Open the code in your preferred code editor.

3.Import the useRef hook from the React library.

4.Use the useRef hook to create a reference to the input field.

5.Pass the reference to the input field as the ref prop.

6.Add an event handler to the button that focuses the input field when clicked.

7.Test your implementation by running the testcases.

8.Remove the bits so that the testcases are falling.

Firstly here is simple example for use the  'useRef' hook in App.js file in react.

![image](https://user-images.githubusercontent.com/85828386/218951470-63cd72e9-dd02-4a56-adb8-d9a51ab6bf20.png)

This example demonstrates how to create a reference to an input element and then focus it when a button is clicked.

Now, Install the Cypress testing library:

	$ npm install --save-dev cypress

And write the test cases in Cypress for the above example:

![image](https://user-images.githubusercontent.com/85828386/218946829-87018211-128b-488e-8880-08ce13942b5a.png)


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


Now, To make a copy of the code in a new folder named 'boilerplate', you can run the following command in your terminal:

	$ cp index.py boilerplate/app.py

To remove the bits from the copied code such that the test cases are failing, you need to identify the code that corresponds to the passing tests and remove or modify it in a way that will cause the tests to fail. 

In the 'boilerplate' folder, you need to remove the parts of the code that use the 'useRef' hook. Here's the code after removing those parts:

![image](https://user-images.githubusercontent.com/85828386/218952212-ee9289c0-2a21-4ae8-bb87-98290c52b222.png)

And the testcases in Cypress will now fail because they expect the input to be focused after clicking the button, but since the useRef hook has been removed, the input can no longer be focused programmatically.

Once the modifications are made, you should run the test suite again to confirm that the tests are indeed failing as expected.

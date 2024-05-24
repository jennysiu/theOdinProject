1. navigate to your directory of your file
2. to run file, type "node" followed by the name of your file:

node add.js

3. If your script is written correctly and there are no errors, you should see the output in the terminal. For the example above, you would see:

Hello, Node.js!

* Passing arguments
If you need to pass arguments to your script, you can do so by adding them after the filename.

Inside your script, you can access these arguments using process.argv, which is an array containing the command line arguments.
  - The first element is the path to the Node.js executable, the second is the path to the JS file, and the subsequent elements are any command line arguments you pass.

* shortcut to auto restart application
As of nodejs V16, there is a built-in option to automatically restart the application when a file changes. This is useful for development purposes. To use this feature, you need to pass the `--watch' flag to nodejs.

node --watch app.js
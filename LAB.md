# Lab - Event Driven Applications

Create an event driven "smart app"

### Before you begin
* You'll need to perform an `npm install` in this folder to have jest installed as a dependency.

## Assignment
Refactor the provided application using best practices for modularization, asynchronous file access, and test-ability.

The application currently uses a nested callback to accept a file from the user, open it, uppercase its contents, and then save it back. It throws errors on failure and logs out success messages.

The task for today is to refactor the application to use events to surface errors and completion status, while also moving away from the big un-testable callback.


### Requirements 
[x] The application must accept a filename as a command line parameter
  [x] Read the file from the file system
  [x] Convert it's contents to upper case
  [x] Write it back to the file system
[x] Following the write operation, report back to the user (console.log) the status
[x] Any and all errors must be thrown

### Implementation Details
* Ensure that every function has JSDoc Notation
[x] Refactor the use of callbacks for fs operations into promises
  [x] You can use util.promisify() to do this.
[x] Separate the functionality of that big callback into it's parts, so that you can run them indepedently as well as test.
  [x] Read in a file
  [x] Uppercase it's contents (stringify the buffer, upper case it, re-buffer-ize it)
  [x] Save back to the file.
[x] Rather than throwing errors and console.log() inline, fire events 
[x] Implement a separate event listener to "hear" and "deal" with those events
[x] Modularize the system
  [x] Create an event module that has a single event emitter instance
  [x] File Reading/Writing/Uppercasing should happen in one module
    [x] Each operation should be in a separate function
    [x] Read/Write should be done in promises, not callbacks
  [x] Subscribers to file status events should be in a separate module (maybe called "logger")
    [x] On a successful conversion and save-back, the logger should send a message
    [x] If an error happens, throw it.  

### Testing
* Write tests around all of your units
  * File Read, File Save, Uppercase
  * Mock the fs module methods so that your tests don't use actual files
* Test event handlers (not events themselves)
* Use spies to help testing your logger methods (assert that console.log was called right)

###  Documentation
Complete the README.md file included in the lab folder

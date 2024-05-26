PDF-CONVERTER

ABOUT THE PROJECT
PDF-CONVERTER is a simple React application that allows users to convert input text into a PDF document.

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\

### `npm test`
Launches the test runner in the interactive watch mode.\

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


BASE FLOW
1. The user opens an app 
Textarea is empty;
"Convert" button is disabled;
History list is empty and shows the message: "No converted files yet"
Pdf viewer shows default UI with message: "No files selected"
2. The user types text
Textarea shows the text;
"Convert" button is enabled;
History list is empty shows message: "No converted files yet"
Pdf viewer shows default UI with message: "No files selected"
3. The user clicks "Convert button"
Textarea is empty;
"Convert" button is disabled;
History list shows converted file item and the message: "Converted files"
Pdf viewer shows converted file in PDF

When add new file :
every new file appears at the top of the history list; 
By clicking the file in history - PDF viever should show corresponding PDF file; 

When delete file: 
If file is not active - it just removes from the list
If file is active - it removes from the list and the next file becomes active if exists, if not - the previous file in the list becomes active if exists otherWise default PDF preview is shown

PROJECT STRUCTURE
1. api folder
Contains files with implemented api functionality to fetch data
2. pages folder
Contains folders with index.jsx file that will be used for router navigation
3. components folder
Contains 
- corresponding folders with the same name as in pages folder that contains components files 
- other necessary files / reusable components

components/PDFConverter - folder that contains building components for pages/PDFConverter.index.jsx:
-ConverterDataInput - is a component that contains text area + "Convert" button to receive data, make api call and set the data to localStorage and local state
-ConvertedHistory - is a component that renders list of converted files or shows corresponding message 'No converted files yet'. Also it implements delete file logic.
-ConvertedFile - is a component that represents file in history
-utils.js file - contains helper functions blobToBase64, base64 Blob for converting blob to base64 and vice-versa, getNextActiveUrl
blobToBase64 is used to save blobs in localStorage in format base64 
base64ToBlob is used when we get base64 from localStorage and want to convert it to url
getNextActiveUrl is used to get the url of next active file after current active file deletion

components/PDFViewer - folder that contains base PDF viewer and its default UI when there is no file to preview

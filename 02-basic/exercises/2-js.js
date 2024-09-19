// Fill in the blanks to complete the exercises.
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Construct the path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// Write to the file
const contentToSave = '+32 465598034';
const filePath = path.join(PATH, 'contact.txt');
fs.writeFile(filePath, contentToSave, 'utf8', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('File saved');
});

// Read from the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log('Read file', data);
});

// Append content to the file
const contentToAppend = 'This is the appended content';
fs.appendFile(filePath, contentToAppend, 'utf8', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('appended to a file successfully!');
    }
});

// Delete a file
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully');
    }
});
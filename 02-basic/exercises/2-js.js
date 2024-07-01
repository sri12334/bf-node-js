// Fill in the blanks to complete the exercises.
import fs from '____';
import path, { dirname } from '____';
import { fileURLToPath } from '____';

// Construct the path
const __filename = fileURLToPath(____);
const PATH = dirname(____);

// Write to the file
const contentToSave = '____';
const filePath = path.join(PATH, '____');
fs.writeFile(filePath, contentToSave, '____', (err) => {
    if (err) {
        console.error(____);
    }
    console.log('____');
});

// Read from the file
fs.readFile(filePath, '____', (err, data) => {
    if (err) {
        console.error(____);
    }
    console.log('____', data);
});

// Append content to the file
const contentToAppend = '____';
fs.appendFile(filePath, contentToAppend, '____', (err) => {
    if (err) {
        console.error(____);
    } else {
        console.log('____');
    }
});

// Delete a file
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('____', err);
    } else {
        console.log('____');
    }
});

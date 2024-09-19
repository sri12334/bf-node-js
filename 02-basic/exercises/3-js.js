// Fill in the blanks to complete the exercises.
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Construct the path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const contentToSave = 'This is a test content.';
const filePath = path.join(PATH, 'example.txt');

// Write a File Synchronously:
try {
    fs.writeFileSync(filePath, contentToSave);
    console.log('File written successfully!');
} catch (err) {
    console.error('Error writing the file:', err);
}

// Read a File Synchronously:
try {
    const data = fs.readFileSync('example.txt', 'utf-8');
    console.log('File contents synchronously:', data);
} catch (err) {
    console.error(err);
}

const contentToAppend = '\nThis is an appended line.';
try {
    fs.appendFileSync('example.txt', contentToAppend);
    console.log('Content appended successfully!');
} catch (err) {
    console.error('Error appending to the file:', err);
}

// Delete a File Synchronously:
try {
    fs.unlinkSync('example.txt');
    console.log('File deleted successfully!');
} catch (err) {
    console.error('Error deleting the file:', err);
}

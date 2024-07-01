// Fill in the blanks to complete the exercises.
import fs from '____';
import path, { dirname } from '____';
import { fileURLToPath } from '____';

// Construct the path
const __filename = fileURLToPath(____);
const PATH = dirname(____);

const contentToSave = '____';
const filePath = path.join(PATH, '____');

// Write a File Synchronously:
try {
    fs.____(filePath, contentToSave);
    console.log('____');
} catch (err) {
    console.error(____);
}

// Read a File Synchronously:
try {
    const data = fs.____('example.txt', 'utf-8');
    console.log('File contents synchronously:', ____);
} catch (err) {
    console.error(____);
}

const contentToAppend = '\nThis is an appended line.';
try {
    fs.____('example.txt', contentToAppend);
    console.log('____');
} catch (err) {
    console.error(____);
}

// Delete a File Synchronously:
try {
    fs.____('example.txt');
    console.log('____');
} catch (err) {
    console.error(____);
}

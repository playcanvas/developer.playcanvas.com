/**
 * Reads the tutorials dir and generates a json file with
 * an array of tags plus a list of tutorial metadata derived from the
 * markdown files. Used for rendering the tutorials index page
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const tutorialsDir = './docs/tutorials';
const outPath = './src/pages/tutorial-data.json';

function getFiles(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    // Get files within the current directory and add a path prefix
    let files = entries
        .filter(file => file.isFile())
        .map(file => path.join(dirPath, file.name));

    // Get directories within the current directory
    const directories = entries.filter(folder => folder.isDirectory());

    // Add the files from the directories to the files array
    for (const directory of directories) {
        files = [...files, ...getFiles(path.join(dirPath, directory.name))];
    }

    // Return all files
    return files;
}

function generateTutorialData(tutorialsDir) {
  const tutorials = getFiles(tutorialsDir);

  const tutorialData = tutorials.map((tutorial) => {
    const rawContent = fs.readFileSync(tutorial, 'utf-8');
    const { data } = matter(rawContent); // extract metadata from markdown

    return {
      ...data,
      filename: path.basename(tutorial).substring(0, path.basename(tutorial).length - 3),
    };
  });

  const tags = [...new Set(tutorialData.flatMap((tutorial) => tutorial.tags || []))];

  const output = {
    tags,
    tutorials: tutorialData,
  };

  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
}

generateTutorialData(tutorialsDir);
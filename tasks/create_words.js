const fs = require("fs");
const csvParse = require("csv-parse");

/// returns explicitly provided file path or implicit words.csv
const getInputFilePath = () => {
  // first argument is always node
  // second argument is the current script
  // third argument is the file name (if provided)
  let explicitFilePath = process.argv[2];
  return explicitFilePath || "words.csv";
}

const checkIfInputFileExists = (path) => {
  return fs.existsSync(path);
}

const readCSV = (path, done) => {
  fs.readFile(path, (err, fileData) => {
    if (err) {
      done(err);
    } else {
      csvParse(fileData, { columns: true, trim: true }, (err, rows) => {
        done(err, rows);
      });
    }
  });
}

const writeJSON = (data, done) => {
  let validKeys = ['id', 'type', 'word', 'tr', 'ex', 'ex_t', 'pr_1', 'pr_2', 'pr_3', 'pr_4', 'pr_5', 'pr_6'];
  data = data.map(obj => {
    obj.word = obj.word.toLowerCase();
    var dup = {};
    for(let key in obj) {
      if(validKeys.indexOf(key) > 0) {
        dup[key] = obj[key];
      }
    }
    return dup;
  });
  fs.writeFile("words.json", JSON.stringify(data), (err) => {
    done(err);
  });
}

const main = () => {
  const inputFilePath = getInputFilePath();
  if (!checkIfInputFileExists(inputFilePath)) {
    throw `File ${inputFilePath} does not exist, aborting...`
  }
  readCSV(inputFilePath, (err, data) => {
    if (err) {
      throw err;
    } else {
      writeJSON(data, (err) => {
        if (err) {
          throw err;
        } else {
          console.log("Exported words to words.json");
        }
      });
    }
  });
}

try {
  main();
} catch (e) {
  console.error(e)
}





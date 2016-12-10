import fs from 'fs';
import path from 'path';
import https from 'https';

export default function requestCodeGenerator() {
  console.log('Generating Request Codes...');
  const csvNameToSave = 'requestCode.csv';
  const inPath = path.join(__dirname, '../../', csvNameToSave);
  const outPath = path.join(__dirname, '../middlewares/requestCode.json');
  const writeStream = fs.createWriteStream(csvNameToSave);
  const csvUrl = 'https://docs.google.com/spreadsheets/d/1y6TQFH1mWShHNrP8NH-KmoX3KBbucu6jRbBwL84j1JQ/export?format=csv';

  https.get(csvUrl, function(response) {
    // console.log(response);
    response.pipe(writeStream);
    response.on('end', function() {
      // console.log('reach');
      fs.readFile(inPath, (err, data) => {
        if (err) {
          if (err) console.log(err);
        } else {
          let routerCodeData = data
          .toString()
          .split(/\r?\n/g);
          routerCodeData.splice(0, 2);
          routerCodeData.splice(routerCodeData.length - 1, 1);
          // console.log(routerCodeData);
          routerCodeData = routerCodeData.map((line) => {
            const lineData = line.split(',');
            // console.log(index, lineData);
            return {
              url: lineData[0],
              method: lineData[1],
              code: lineData[10]
            };
          });
          fs.writeFile(outPath, JSON.stringify(routerCodeData), (writeErr) => {
            if (writeErr) console.log(writeErr); else console.info('[SUCCESS] Request Codes generated');
          });
        }
      });
    });
  });
}

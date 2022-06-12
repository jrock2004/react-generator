const fs = require('fs');
const logger = require('./logger.js');

/**
 * Checks to see if the file already exists
 *
 * @param {string} filePath - The file name you want to check
 * @returns boolean
 */
exports.fileExists = (filePath) => fs.existsSync(filePath);

exports.createFile = (dir, filePath, content) => {
  if (!this.fileExists(filePath)) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, content);

    logger.logSuccess(`${filePath} created`);
  } else {
    logger.logWarning(`${filePath} already exists`);
  }
}

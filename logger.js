const log = console.log;

/**
 * Logs your success message
 *
 * @param {string} message - text you want to log
 */
exports.logSuccess = (message) => log(`\x1b[32m${message}\x1b[0m`);

/**
 * Logs your error message
 *
 * @param {string} message - text you want to log
 */
exports.logError = (message) => log(`\x1b[31m${message}\x1b[0m`);

/**
 * Logs your warning message
 *
 * @param {string} message - text you want to log
 */
exports.logWarning = (message) => log(`\x1b[33m${message}\x1b[0m`);

/**
 * Logs your message
 *
 * @param {string} message - text you want to log
 */
exports.log = (message) => log(message);

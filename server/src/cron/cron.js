const cron = require("node-cron");
const createUserNewsletter = require("../services/newsletter");

const cronJob = cron.schedule(
    "0 0 5 * * *",
    () => {
        createUserNewsletter()
    }
);

module.exports = {
    cronJob
}

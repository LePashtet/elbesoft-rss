const cron = require("node-cron");

 const cronJob = cron.schedule(
    "0 0 5/12 * * *",
    () => {
        console.log("A cron job that runs every 40 minutes");
        console.log("This job will start in 20 minutes");
    }
);

 module.exports = {
     cronJob
 }

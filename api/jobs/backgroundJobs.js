const schedule = require('node-schedule');

const backgroundJobs = () => {
    console.log("Executing cron jobs");

    //background job scheduling for given date
    // const schedule_date = new Date('2022-02-06T14:23.000+05:30');
    // schedule.scheduleJob(schedule_date, () => {
    //     console.log('Executing Background Job ät : ', new Date().toString());
    // });

    let count = 0;
    //At recurrent intervals
    const my_rec_job = schedule.scheduleJob('recurrent-job' ,'*/5 * * * * *', ()=> {
        console.log('Executing recurrent jobs every 5 seconds');
        count++;
        // schedule.cancelJob('recurrent-job')

        if (count == 3) {
            my_rec_job.cancel();
        }
    });

    // my_rec_job.cancel();
   

};

module.exports = backgroundJobs;
import { app, InvocationContext, Timer } from '@azure/functions';

export async function timerTrigger1(timer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
    console.log('***');
}

app.timer('timerTrigger1', {
    runOnStartup: true, // only use for dev
    schedule: '* * * * * *', 
    handler: timerTrigger1,
});


    // schedule: process.env.APP_SCHEDULE, 

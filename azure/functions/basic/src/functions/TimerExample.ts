import { app, InvocationContext, Timer } from '@azure/functions';

export async function timerTrigger1(timer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
    context.log('timer: ', timer);
}

app.timer('timerTrigger1', {
    runOnStartup: true, // only use for dev
    schedule: '* * * * * *', // Runs every 10 seconds
    handler: timerTrigger1,
});
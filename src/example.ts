import { Observable } from 'rxjs';

// const observer = {
//     next: (value: any) => console.log('next', value),
//     error: (error: any) => console.log('error', error),
//     complete: () => console.log('complete!')
// }

const observable = new Observable(subscriber => {
    subscriber.next('hello');
    subscriber.next('World');
    subscriber.complete();
    subscriber.next('No Called')
});

observable.subscribe(
    (value: any) => console.log('next', value),
    // (error: any) => console.log('error', error),
    null,
    () => console.log('complete!')
);
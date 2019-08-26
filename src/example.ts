import { Observable } from 'rxjs';
import { Observer } from 'rxjs/internal/types';

const observer: Observer<any> = {
    next: (value: any) => console.log('next', value),
    error: (error: any) => console.log('error', error),
    complete: () => console.log('complete!')
}

const observable = new Observable(subscriber => {
    let count = 0;
    const id = setInterval(() => {
        subscriber.next(count++);
        // subscriber.complete();
    }, 1000);

    return () => {
        console.log('called');
        clearInterval(id);
    }
});

console.log('before')
const subscription = observable.subscribe(observer);
const subscription2 = observable.subscribe(observer);
subscription.add(observable.subscribe(observer));
console.log('after')
setTimeout(() => {
    subscription.unsubscribe();
    subscription2.unsubscribe();
}, 3000)
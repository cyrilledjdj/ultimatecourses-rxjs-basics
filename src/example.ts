import { Observable } from 'rxjs';

const observer = {
    next: (value: any) => console.log('next', value),
    error: (error: any) => console.log('error', error),
    complete: () => console.log('complete!')
}

const observable = new Observable(subscriber => {
    let count = 0;
    const id = setInterval(() => {
        subscriber.next(count++);
        subscriber.complete();
        console.log('stepped');
    }, 1000);

    return () => {
        console.log('called');
        clearInterval(id);
    }
});

console.log('before')
observable.subscribe(observer);
console.log('after')
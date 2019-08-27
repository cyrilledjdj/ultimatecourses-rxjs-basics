import { fromEvent, of, range, from, interval, timer, Observer } from 'rxjs';
import { map, audit, pluck, mapTo } from 'rxjs/operators'

const observer: Observer<any> = {
    next: (value: any) => console.log('next', value),
    error: (error: any) => console.log('error', error),
    complete: () => console.log('complete!')
}

// const observable$ = new Observable(subscriber => {
//     let count = 0;
//     const id = setInterval(() => {
//         subscriber.next(count++);
//         // subscriber.complete();
//     }, 1000);

//     return () => {
//         console.log('called');
//         clearInterval(id);
//     }
// });

// console.log('before')
// const subscription = observable$.subscribe(observer);
// const subscription2 = observable$.subscribe(observer);
// subscription.add(observable$.subscribe(observer));
// console.log('after')
// setTimeout(() => {
//     subscription.unsubscribe();
//     subscription2.unsubscribe();
// }, 3000)

// const source$ = fromEvent(document, 'click');
// const observer = {
//     next: value => console.log('next', value),
//     error: err => console.log('error', err),
//     complete: () => console.log('complete')
// }
// const sub1 = source$.subscribe(observer);
// sub1.add(source$.subscribe(observer));

// setTimeout(() => {
//     console.log('unsubscribing');
//     sub1.unsubscribe();
// }, 3000)

// const observer = {
//     next: value => console.log('next', value),
//     error: err => console.log('error', err),
//     complete: () => console.log('complete')
// }

// const source$ = range(1, 5);
// source$.subscribe(observer);

// const observer = {
//     next: value => console.log('next', value),
//     error: err => console.log('error', err),
//     complete: () => console.log('complete')
// }

// function* hello() {
//     yield 'hello';
//     yield 'world';
// }

// const iterator = hello();

// // const source$ = from(fetch('https://api.github.com/users/cyrilledjdj'));

// // source$.subscribe(observer);

// const source$ = from(iterator);

// source$.subscribe(observer);

// const timer$ = timer(3000);

// timer$.subscribe(observer)

const observable$ = of(1, 2, 3, 4, 5);
const other$ = observable$.pipe(map(value => 10 * value));
// observable$.subscribe(observer);
// other$.subscribe(observer)
const keyup$ = fromEvent(document, 'keyup');
keyup$.subscribe(console.log)
const keyCode$ = keyup$.pipe(
    map((event: KeyboardEvent) => event.code)
)
keyCode$.subscribe(console.log)
const keycodeWithPluck$ = keyup$.pipe(
    pluck('key')
)
keycodeWithPluck$.subscribe(console.log)
const pressed$ = keyup$.pipe(
    mapTo('Key Pressed!')
)
pressed$.subscribe(console.log)
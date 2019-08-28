import { fromEvent, Observer, from, interval, Subscriber, of } from 'rxjs';
import { map, pluck, reduce, take, scan, mapTo, filter, tap, first } from 'rxjs/operators';

// const observer: Observer<any> = {
//     next: (value: any) => console.log('next', value),
//     error: (error: any) => console.log('error', error),
//     complete: () => console.log('complete!')
// }

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

// const observable$ = of(1, 2, 3, 4, 5);
// const other$ = observable$.pipe(map(value => 10 * value));
// observable$.subscribe(observer);
// other$.subscribe(observer)
// const keyup$ = fromEvent(document, 'keyup');
// keyup$.subscribe(console.log)
// const keyCode$ = keyup$.pipe(
//     map((event: KeyboardEvent) => event.code)
// )
// keyCode$.subscribe(console.log)
// const keycodeWithPluck$ = keyup$.pipe(
//     pluck('key')
// )
// keycodeWithPluck$.subscribe(console.log)
// const pressed$ = keyup$.pipe(
//     mapTo('Key Pressed!')
// )
// pressed$.subscribe(console.log)

// range(1, 5).pipe(
//     filter(value => value <= 2)
// ).subscribe(console.log)

// const keyup$ = fromEvent(document, 'keyup');
// const keycode$ = keyup$.pipe(
//     map((event: KeyboardEvent) => event.code)
// )
// const enter$ = keycode$.pipe(
//     filter(value => value === 'Enter' || value === 'NumpadEnter')
// )

// enter$.subscribe(console.log);
// keycode$.subscribe(console.log)
// function calculateScrollPercent(element) {
//     const { scrollTop, scrollHeight, clientHeight } = element;
//     return (scrollTop / (scrollHeight - clientHeight)) * 100;
// }
// const progressBar: HTMLElement = document.querySelector('.progress-bar');
// const scroll$ = fromEvent(document, 'scroll');
// const progress$ = scroll$.pipe(
//     map(({ target }: Event) => calculateScrollPercent(target['documentElement']))
// )
// progress$.subscribe(percent => { progressBar.style.width = `${percent}%` })

// const numbers = [1, 2, 3, 4, 5];

// const totalReducer = (accumulator, currentValue) => {
//     return accumulator + currentValue
// }

// interval(1000).pipe(
//     take(4),
//     reduce(totalReducer, 0)
// ).subscribe({
//     next: console.log,
//     complete: () => console.log('Complete!')
// })

// const numbers = [1, 2, 3, 4, 5];

// const totalReducer = (accumulator, currentValue) => {
//     return accumulator + currentValue
// }
// const totalScan = (accumulator, currentValue) => {
//     return { ...accumulator, ...currentValue }
// }

// const user = [
//     { name: 'Brian', loggedIn: false, token: null },
//     { name: 'Brian', loggedIn: true, token: 'abc' },
//     { name: 'Brian', loggedIn: true, token: 123 },
// ]

// const state$ = from(user).pipe(
//     scan(totalScan, {}),
// )

// state$.subscribe({
//     next: console.log,
//     complete: () => console.log('Complete!')
// })

// const name$ = state$.pipe(
//     map(state => state.name)
// )

// name$.subscribe(console.log)

// const counter$ = interval(1000)

// const countdown = document.getElementById('countdown') as HTMLElement;
// const message = document.getElementById('message') as HTMLElement;

// counter$.pipe(
//     mapTo(-1),
//     scan((accumulator, current) => {
//         return accumulator + current;
//     }, 10),
//     filter(value => value >= 0),

// ).subscribe(value => {
//     countdown.innerHTML = '' + value;
//     if (!value) {
//         message.innerHTML = 'liftoff!';
//     }
// });

// const number$ = of(1, 2, 3, 4, 5);
// number$.pipe(
//     tap(value => console.log('before', value), null, () => console.log('done1')),
//     map(value => value * 10),
//     tap(value => console.log('after', value), null, () => console.log('done2'))
// ).subscribe(value => {
//     console.log('from subscribe', value)
// })

// const countdown = document.getElementById('countdown') as HTMLElement;
// const message = document.getElementById('message') as HTMLElement;

// interval(1000).pipe(
//     mapTo(-1),
//     scan((accumulator, current) => {
//         return accumulator + current;
//     }, 10),
//     tap(console.log),
//     filter(value => value >= 0),
//     tap(console.log)
// ).subscribe(value => {
//     countdown.innerHTML = '' + value;
//     if (!value) {
//         message.innerHTML = 'liftoff!';
//     }
// });

const numbers$ = of(1, 2, 3, 4, 5);
const click$ = fromEvent(document, 'click')
numbers$.pipe(
    take(3)
).subscribe(console.log, null, () => console.log('Complete!'));

click$.pipe(
    map((event: MouseEvent) => ({
        x: event.clientX,
        y: event.clientY
    })),
    first(({ y }: MouseEvent) => y > 200)
    // take(1)
).subscribe(console.log, null, () => console.log('Complete!'));
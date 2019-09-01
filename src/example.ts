import { fromEvent, merge, concat, Observer, from, interval, Subscriber, of, asyncScheduler, empty, timer, combineLatest, forkJoin } from "rxjs";
import { ajax } from 'rxjs/ajax';
import {
    map,
    pluck,
    reduce,
    take,
    scan,
    mapTo,
    filter,
    tap,
    first,
    takeWhile,
    takeUntil,
    distinctUntilChanged,
    distinctUntilKeyChanged,
    debounceTime,
    debounce,
    throttleTime,
    sampleTime,
    sample,
    auditTime,
    mergeAll,
    mergeMap,
    switchMap,
    concatMap,
    delay,
    exhaustMap,
    catchError,
    mergeMapTo,
    finalize,
    switchMapTo,
    startWith,
    endWith,
    concat as concatOperator,
    merge as mergeOperator,
    distinct,
    withLatestFrom,
} from "rxjs/operators";

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

// const numbers$ = of(1, 2, 3, 4, 5);
// const click$ = fromEvent(document, 'click')
// numbers$.pipe(
//     take(3)
// ).subscribe(console.log, null, () => console.log('Complete!'));

// click$.pipe(
//     map((event: MouseEvent) => ({
//         x: event.clientX,
//         y: event.clientY
//     })),
//     first(({ y }: MouseEvent) => y > 200)
//     // take(1)
// ).subscribe(console.log, null, () => console.log('Complete!'));

// const click$ = fromEvent(document, 'click')

// click$.pipe(
//     map((event: MouseEvent) => ({
//         x: event.clientX,
//         y: event.clientY
//     })),
//     tap(console.log),
//     takeWhile(({ y }) => y <= 200, true)
// ).subscribe(console.log, null, () => console.log('Complete!'));

// interval(1000).pipe(
//     mapTo(-1),
//     scan((accumulator, current) => {
//         return accumulator + current;
//     }, 5),
//     tap(console.log),
//     filter(value => value >= 0)
// ).subscribe(console.log, null, () => console.log('Complete'))

// const countdown = document.getElementById('countdown') as HTMLElement;
// const message = document.getElementById('message') as HTMLElement;
// const abortButton = document.getElementById('abortMission')
// const counter$ = interval(1000);
// const click$ = fromEvent(document, 'click');
// const abortClick$ = fromEvent(abortButton, 'click');

// counter$.pipe(
//     takeUntil(click$)
// ).subscribe(console.log, null, () => console.log('Done'))
// interval(1000).pipe(
//     mapTo(-1),
//     scan((accumulator, current) => {
//         return accumulator + current;
//     }, 10),
//     takeWhile(value => value >= 0),
//     takeUntil(abortClick$)
// ).subscribe(value => {
//     countdown.innerHTML = '' + value;
//     if (!value) {
//         message.innerHTML = 'liftoff!';
//     }
// });

// const numbers$ = of(1, 1, 2, 3, 3, 3, 4, 5, 4, 3, 3)

// numbers$.pipe(
//     distinctUntilChanged()
// ).subscribe(console.log)
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
//     distinctUntilKeyChanged('name'),
//     map(state => state.name),
// )

// name$.subscribe(console.log)4

// const inputBox = document.getElementById('text-input')

// const input$ = fromEvent(inputBox, 'keyup');
// const click$ = fromEvent(document, 'click');

// input$.pipe(
//     // debounceTime(1000),
//     debounce(() => interval(1000)),
//     pluck('target', 'value'),
//     distinctUntilChanged()
// ).subscribe(value => console.log(value), null, () => console.log('Complete!'))


// const click$ = fromEvent(document, 'click');

// click$.pipe(
//     throttleTime(3000),
//     // debounceTime(1000),
//     pluck('target'),
//     // distinctUntilChanged()
// ).subscribe(value => console.log(value), null, () => console.log('Complete!'))

// function calculateScrollPercent(element) {
//     const { scrollTop, scrollHeight, clientHeight } = element;
//     return (scrollTop / (scrollHeight - clientHeight)) * 100;
// }
// const progressBar: HTMLElement = document.querySelector('.progress-bar');
// const scroll$ = fromEvent(document, 'scroll');
// const progress$ = scroll$.pipe(
//     throttleTime(1000, asyncScheduler, {
//         leading: false,
//         trailing: true
//     }),
//     map(({ target }: Event) => calculateScrollPercent(target['documentElement'])),
//     tap(console.log)
// )
// progress$.subscribe(percent => { progressBar.style.width = `${percent}%` })

// const click$ = fromEvent(document, 'click')
// const timer$ = interval(1000)
// timer$.pipe(
//     // sampleTime(4000),
//     sample(click$),
//     // map(({ clientX, clientY }: MouseEvent) => ({ clientX, clientY }))
// ).subscribe(console.log)

// const click$ = fromEvent(document, 'click')
// const timer$ = interval(1000)
// click$.pipe(
//     auditTime(4000),
// ).subscribe(console.log)


// const textInput = document.getElementById('text-input')

// const input$ = fromEvent(textInput, 'keyup')

// input$.pipe(
//     // map(event => {
//     //     const val = (event.target as HTMLInputElement).value;
//     //     return ajax.getJSON(`https://api.github.com/users/${val}`, {});
//     // }),
//     debounceTime(1000),
//     mergeMap(event => {
//         const val = (event.target as HTMLInputElement).value;
//         return ajax.getJSON(`https://api.github.com/users/${val}`, {});
//     }),
//     // mergeAll(),
// ).subscribe(console.log)

// const click$ = fromEvent(document, 'click');
// const mousedown$ = fromEvent(document, 'mousedown');
// const mouseup$ = fromEvent(document, 'mouseup');
// const interval$ = interval(1000);

// mousedown$.pipe(
//     mergeMap(() => interval$.pipe(
//         takeUntil(mouseup$)
//     ))
// ).subscribe(console.log)

// const coordinates$ = click$.pipe(
//     map((event: MouseEvent) => ({ x: event.clientX, y: event.clientY }))
// )

// const coordinatesWithSave$ = coordinates$.pipe(
//     mergeMap(coords => ajax.post('https://www.mocky.io/v2/5185415ba171ea3a00704eed', coords))
// )

// coordinatesWithSave$.subscribe(console.log);

// const click$ = fromEvent(document, 'click');
// const mousedown$ = fromEvent(document, 'mousedown');
// const mouseup$ = fromEvent(document, 'mouseup');
// const interval$ = interval(1000);

// const BASE_URL = 'https://api.openbrewerydb.org/breweries';
// // click$.pipe(
// //     switchMap(() => interval$)
// // ).subscribe(console.log)

// const textInput = document.getElementById('text-input');
// const typeaheadContainer = document.getElementById('typeahead-container')
// const input$ = fromEvent(textInput, 'keyup')
// input$.pipe(
//     debounceTime(250),
//     pluck('target', 'value'),
//     distinctUntilChanged(),
//     switchMap(searchTerm => ajax.getJSON(`${BASE_URL}?by_name=${searchTerm}`))
// ).subscribe((response: Array<{ name }>) => {
//     typeaheadContainer.innerHTML = response.map(b => b.name).join('<br>');
// })

// const interval$ = interval(1000);
// const click$ = fromEvent(document, 'click');
// click$.pipe(
//     concatMap(() => interval$.pipe(
//         take(3)
//     )),
// )/* .subscribe(console.log) */

// const saveAnswer = (answer) => of(`Saved: ${answer}`).pipe(
//     delay(1500)
// )

// const radioButtons = document.querySelectorAll('.radio-option')

// const answerChange$ = fromEvent(
//     radioButtons, 'click'
// )

// answerChange$.pipe(
//     concatMap(event => saveAnswer((event.target as HTMLInputElement).value))
// ).subscribe(console.log)

// const interval$ = interval(1000)
// const click$ = fromEvent(document, 'click')


// click$.pipe(
//     exhaustMap(() => interval$.pipe(take(3)))
// )/* .subscribe(console.log) */


// const authenticateUser = () => ajax.post(
//     'https://jsonplaceholder.typicode.com/users',
//     {
//         email: 'eve.holt@regres.in',
//         password: 'cityslicka'
//     }
// )

// const loginButton = document.getElementById('login')

// const login$ = fromEvent(loginButton, 'click').pipe(
//     exhaustMap(authenticateUser)
// ).subscribe(console.log)

// const BASE_URL = 'https://api.openbrewerydb.org/breweries';

// const textInput = document.getElementById('text-input');
// const typeaheadContainer = document.getElementById('typeahead-container')
// const input$ = fromEvent(textInput, 'keyup')
// input$.pipe(
//     debounceTime(250),
//     pluck('target', 'value'),
//     distinctUntilChanged(),
//     switchMap(searchTerm => ajax.getJSON(`${BASE_URL}?by_name=${searchTerm}`).pipe(
//         catchError(error => empty())
//     ))
// ).subscribe((response: Array<{ name }>) => {
//     typeaheadContainer.innerHTML = response.map(b => b.name).join('<br>');
// })
// const startButton = document.getElementById('start')
// const stopButton = document.getElementById('stop')
// const pollingStatus = document.getElementById('polling-status')
// const dogImage = document.getElementById('dog') as HTMLImageElement
// const startClick$ = fromEvent(startButton, 'click')
// const stopClick$ = fromEvent(stopButton, 'click')

// startClick$.pipe(
//     exhaustMap(() => timer(0, 5000).pipe(
//         tap(() => pollingStatus.innerHTML = 'Active'),
//         switchMapTo(ajax.getJSON('https://random.dog/woof.json')),
//         pluck('url'),
//         takeUntil(stopClick$),
//         finalize(() => pollingStatus.innerHTML = 'Stopped')
//     )),
// ).subscribe(url => dogImage.src = url)

// const number$ = of(1, 2, 3)
// number$.pipe(startWith(12), endWith(12)).subscribe(console.log)

// const counter$ = interval(1000)

// const countdown = document.getElementById('countdown') as HTMLElement;
// const message = document.getElementById('message') as HTMLElement;
// const abortButton = document.getElementById('abortMission') as HTMLButtonElement;
// const COUNTDOWN_FROM = 10;
// const abortClick$ = fromEvent(abortButton, 'click')

// counter$.pipe(
//     mapTo(-1),
//     scan((accumulator, current) => {
//         return accumulator + current;
//     }, COUNTDOWN_FROM),
//     takeWhile(value => value >= 0),
//     takeUntil(abortClick$),
//     startWith(COUNTDOWN_FROM)
// ).subscribe(value => {
//     countdown.innerHTML = '' + value;
//     if (!value) {
//         message.innerHTML = 'liftoff!';
//     }
// });

// const interval$ = interval(1000)
// const delayed$ = empty().pipe(delay(1000))
// const concat$ = concat(from([1, 2, 3]), of(1, 2, 3))

// concat$.subscribe(console.log)

// delayed$.pipe(
//     concatOperator(
//         delayed$.pipe(startWith('3...')),
//         delayed$.pipe(startWith('2...')),
//         delayed$.pipe(startWith('1...')),
//         delayed$.pipe(startWith('Go!')),
//     ),
//     startWith('Get Ready!')
// ).subscribe(console.log)

// const keyup$ = fromEvent(document, 'keyup')
// const click$ = fromEvent(document, 'click')

// keyup$.subscribe(console.log)
// click$.subscribe(console.log) 

// merge(
//     keyup$,
//     click$
// ).subscribe(console.log)

// const counter$ = interval(1000)

// const countdown = document.getElementById('countdown') as HTMLElement;
// const message = document.getElementById('message') as HTMLElement;
// const pauseButton = document.getElementById('pauseMission') as HTMLButtonElement;
// const startButton = document.getElementById('startMission') as HTMLButtonElement;
// const COUNTDOWN_FROM = 10;
// const pauseClick$ = fromEvent(pauseButton, 'click')
// const startClick$ = fromEvent(startButton, 'click')

// merge(
//     startClick$.pipe(mapTo(true)),
//     pauseClick$.pipe(mapTo(false))
// ).pipe(
//     switchMap(shouldStart => {
//         return shouldStart && counter$ || empty()
//     }),
//     mapTo(-1),
//     scan((accumulator, current) => {
//         return accumulator + current;
//     }, COUNTDOWN_FROM),
//     takeWhile(value => value >= 0),
//     startWith(COUNTDOWN_FROM)
// ).subscribe(value => {
//     countdown.innerHTML = '' + value;
//     if (!value) {
//         message.innerHTML = 'liftoff!';
//     }
// });

// const firstInput = document.getElementById('first');
// const secondInput = document.getElementById('second');


// const keyup$ = fromEvent(document, 'keyup')
// const click$ = fromEvent(document, 'click')

// const changeAsValue = (elem: HTMLElement) => {
//     return merge(
//         fromEvent(elem, 'change'),
//         fromEvent(elem, 'keyup')
//     ).pipe(
//         map((event: Event) => (event.target as HTMLInputElement).valueAsNumber),
//         distinctUntilChanged()
//     )
// }

// keyup$.subscribe(console.log)
// click$.subscribe(console.log) 
// combineLatest(
//     of(1, 2, 3),
//     of(4, 5, 6)
// ).pipe(
//     withLatestFrom()
// ).subscribe(console.log)

// combineLatest(
//     keyup$,
//     click$
// ).subscribe(console.log)

// click$.pipe(
//     withLatestFrom(interval(1000))
// ).subscribe(console.log)

// combineLatest(
//     changeAsValue(firstInput),
//     changeAsValue(secondInput)
// ).pipe(
//     filter(([first, second]: Array<any>) => !isNaN(first) && !isNaN(second)),
//     map(([first, second]) => first + second)
// ).subscribe(console.log)

const number$ = of(1, 2, 3)
const letters$ = from(['a', 'b', 'c'])

forkJoin(
    number$.pipe(delay(3000)),
    letters$.pipe(delay(6000))
).subscribe(console.log)

forkJoin({
    numbers: number$.pipe(delay(3000)),
    letters: letters$.pipe(delay(6000))
}).subscribe(console.log)

const GITHUB_API_BASE = 'https://api.github.com';

forkJoin({
    'full-name': ajax.getJSON(`${GITHUB_API_BASE}/users/cyrilledjdj`).pipe(
        pluck('name')
    ),
    'repo-names': ajax.getJSON(`${GITHUB_API_BASE}/users/cyrilledjdj/repos`).pipe(
        map((list: Array<any>) => {
            const ans = []
            list.reduce((prev, curr) => {
                ans.push(curr.name);
            });
            return ans;
        })
    )
}).subscribe(console.log)
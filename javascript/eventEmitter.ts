/*
Event Emitter

Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:

subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.
*/



type CallbackFnType = (...args: any[]) => void;

type UnsubscribeFnType = () => void;

type EventName = string;

interface UnsubscribeType {
    unsubscribe: UnsubscribeFnType;
}

interface EventEmitterType {
    subscribe: (eventName: EventName, callbackFn: CallbackFnType) => UnsubscribeType;
    emit: (eventName: EventName, args: any[]) => any[];
}

interface CallbackType {
    id: string;
    func: CallbackFnType;
}


class EventEmitter implements EventEmitterType {
    private subscription: Map<EventName, CallbackType[]>;



    constructor() {
        this.subscription = new Map();
    }

    subscribe(eventName: EventName, callbackFn: CallbackFnType): UnsubscribeType {

        let index = 0;

        const prevCallbacks = this.subscription.get(eventName);

        if(!prevCallbacks) {
            this.subscription.set(eventName, [{ id: `${index}`, func: callbackFn}]);
        }else {
            index = prevCallbacks.length;
            this.subscription.set(eventName, [...prevCallbacks, {id: `${index}`, func: callbackFn}])
        }


        return {
            unsubscribe: () => {
                const callbacks = this.subscription.get(eventName);
                if(callbacks) {
                    const target = callbacks.findIndex((callback) => callback.id === `${index}`);
                    callbacks.splice(target, 1);
                    this.subscription.set(eventName, callbacks);
                }
            }
        }
    }

    emit(eventName: EventName, args: any[]): any[] {
        let result: any[] = [];

        const callbacks = this.subscription.get(eventName);

        if(callbacks) {
            result = callbacks.map((callback) => callback.func(...args))
        }

        return result;
    } 
}

// TESTING

// const emitter = new EventEmitter();
// emitter.subscribe("firstEvent", function(...args) { return args.join(',') });
// console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
// console.log(emitter.emit("firstEvent", [3, 4, 6])); // ["3,4,6"]

//-------------------------------------------------

const emitter = new EventEmitter();
const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
sub.unsubscribe(); // undefined
console.log(emitter.emit("firstEvent", [4, 5, 6])); // [], there are no subscriptions

//-------------------------------------------------

// const emitter = new EventEmitter();
// const sub1 = emitter.subscribe("firstEvent", x => x + 1);
// const sub2 = emitter.subscribe("firstEvent", x => x + 2);
// console.log(sub1.unsubscribe()); // undefined
// console.log(emitter.emit("firstEvent", [5])); // [7]

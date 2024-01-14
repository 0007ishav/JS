// Immediately Invoked Function Expression (IIFE)

// Used to create a private scope
// Avoid polluting the global namespace

(function chai(){
    console.log(`DB CONNECTED`);
})();    // Semi-colon is required to end this statement otherwise error will occur. IIFE ko nhi pta context rokna kaha h that's why. 

// (function aurChai(){
//     console.log(`DB CONNECTED`);
// })();

// ( () => {
//     console.log(`DB CONNECTED`);
// })()

((name) => {
    console.log(`DB CONNECTED to ${name}`);
})("Ishav")

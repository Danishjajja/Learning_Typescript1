// **42**. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function show_magicians(showmagicians) {
    showmagicians.map((elm) => {
        console.log(`The great magician`, elm, `is very popular in world these days`);
    });
}
show_magicians(["Danish", "Ahmad", "Hamid", "Mustafa", "Ali"]);
export {};

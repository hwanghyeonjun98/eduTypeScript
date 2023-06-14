/**
 * keyof
 */

type Person = typeof person;

function getType(property: Person, key: keyof typeof person) {
	return console.log(property[key]);
}

const person = {
	name: "jj",
	age : 24
};

getType(person, "name");
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static compareAge(x, y) {
    if (x.age < y.age) {
      console.log(`${y.firstName} è più vecchio di ${x.firstName}`);
    } else if (x.age > y.age) {
      console.log(`${x.firstName} è più vecchio di ${y.firstName}`);
    } else {
      console.log(`${x.firstName} e ${y.firstName} hanno la stessa età`);
    }
  }
}

const utente1 = new User("Francesco", "Ricciardi", 25, "Italy");

const utente2 = new User("Elisa", "Pugliese", 24, "Germany");

console.log(utente1);
console.log(utente2);

User.compareAge(utente1, utente2);

// ESERCIZIO 2

const animals = [];

const form = document.querySelector("form");

const div = document.querySelector("div");
console.log(div);

let animal = null;
let animal2 = null;

form.onsubmit = function (e) {
  e.preventDefault();

  console.log("Form Inviato");

  const petNameInsert = document.getElementById("petName");
  console.log(petNameInsert.value);

  const ownerNameInsert = document.getElementById("ownerName");
  console.log(ownerNameInsert.value);

  const speciesInsert = document.getElementById("species");
  console.log(speciesInsert.value);

  const breedInsert = document.getElementById("breed");
  console.log(breedInsert.value);

  class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    sameOwner(otherAnimal) {
      return this.ownerName === otherAnimal.ownerName;
    }
  }

  if (animal === null) {
    animal = new Pet(petNameInsert.value, ownerNameInsert.value, speciesInsert.value, breedInsert.value);
  } else {
    animal2 = new Pet(petNameInsert.value, ownerNameInsert.value, speciesInsert.value, breedInsert.value);
  }

  console.log("animal: ", animal);
  console.log("animal2: ", animal2);

  const namePet = document.createElement("h2");
  namePet.innerText = petNameInsert.value;

  const ownerPet = document.createElement("h2");
  ownerPet.innerText = ownerNameInsert.value;

  const spaciesPet = document.createElement("h2");
  spaciesPet.innerText = speciesInsert.value;

  const breedPet = document.createElement("h2");
  breedPet.innerText = breedInsert.value;

  const petEntity = document.createElement("h1");
  petEntity.innerText = "Animale";

  div.appendChild(petEntity);
  div.appendChild(namePet);
  div.appendChild(ownerPet);
  div.appendChild(spaciesPet);
  div.appendChild(breedPet);
  if (animal2 !== null) {
    console.log(animal.sameOwner(animal2));
    const result = document.createElement("h3");
    result.innerText = animal.sameOwner(animal2);
    div.appendChild(result);
  }
};

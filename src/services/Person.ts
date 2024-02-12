import type { Person } from "../interfaces/Person";

let people: Person[] = [];

export function savePerson(person: Person) {
  people.push(person);
  localStorage.setItem('people', JSON.stringify(people));
}

export function getPerson(Username: string) : Person{
    return JSON.parse(localStorage.getItem('people')!)
    .find((p: Person) => p.Username === Username);
}

export function setCurrentUser(Username: string) : void{
    localStorage.setItem('currentUser', Username);
}

export function getCurrentUser() : Person{
    return getPerson(localStorage.getItem('currentUser')!);
}

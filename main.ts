type Friend = {
    firstName: string;
    lastName: string;
    id: number;
}
var best ={
    friends:[] as Friend[]
}
let friend1:Friend={
    firstName: "Sanober",
    lastName: "naz",
    id: 786
}
let friend2:Friend={
    firstName: "Saira",
    lastName: "Shaikh",
    id: 101
}
let friend3:Friend={
    firstName: "Sumaira",
    lastName: "Malik",
    id: 313
}
best.friends.push(friend1, friend2, friend3);
console.log(best);
console.log("Sanober Naz 786");
console.log("Saira Shaikh 101");
console.log("Sumaira Malik 313");

"use strict";
// Question No.40
Object.defineProperty(exports, "__esModule", { value: true });
function Album(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = Album("inshal", "star");
console.log(album);
album = Album("mesum", "waves");
console.log(album);
album = Album("mohib", "High");
console.log(album);

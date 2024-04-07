// Question No.40

function Album(artist: string, title: string): {artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;

}

let album = Album("inshal", "star")
console.log(album)

album = Album("mesum", "waves")
console.log(album)

album = Album("mohib", "High")
console.log(album)
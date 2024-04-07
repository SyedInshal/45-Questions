// Question No.38

function city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}`)
}

city('Karachi')
city('Toronto', 'Canada')
city('Lahore', 'Punjab')
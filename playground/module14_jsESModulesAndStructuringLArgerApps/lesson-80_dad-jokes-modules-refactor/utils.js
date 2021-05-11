export function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (item === not) {
        console.log("Same item used last time, look again!");
        return randomItemFromArray(arr, not);
    }
    return item;
}

/*enum ResistorValues {
    black = 0,
    brown = 1,
    red = 2,
    orange = 3,
    yellow = 4,
    green = 5,
    blue = 6,
    violet = 7,
    grey = 8,
    white = 9
}

type Color = keyof typeof ResistorValues;

function decodedValue([first, second]: [Color, Color]): number {
    return Number(`${ResistorValues[first]}${ResistorValues[second]}`);
}

console.log(decodedValue(['red', 'green']));*/
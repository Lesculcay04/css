enum ResistorColor {
    BLACK,
    BROWN,
    RED,
    ORANGE,
    YELLOW,
    GREEN,
    BLUE,
    VIOLET,
    GREY,
    WHITE,
}

type ResistorBand = ResistorColor;

const COLORS: ResistorBand[] = [
    ResistorColor.BLACK,
    ResistorColor.BROWN,
    ResistorColor.RED,
    ResistorColor.ORANGE,
    ResistorColor.YELLOW,
    ResistorColor.GREEN,
    ResistorColor.BLUE,
    ResistorColor.VIOLET,
    ResistorColor.GREY,
    ResistorColor.WHITE,
];

function colorCode(band: ResistorBand): number {
    return band;
}

function colors(): ResistorBand[] {
    return COLORS;
}

console.log(colorCode(ResistorColor.BLACK));
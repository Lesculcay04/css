//Deber//
enum Season{
    Fall = 'fall',
    Winter = 'winter',
    Spring = 'spring',
    Summer = 'summer'
};

function whichMonths(season: Season): string {
    let monthsInSeason: string;
    switch (season) {
        case Season.Fall:
            monthsInSeason = 'September to November';
            break;
        case Season.Winter:
            monthsInSeason = 'December to February';
            break;
        case Season.Spring:
            monthsInSeason = 'March to May';
            break;
        case Season.Summer:
            monthsInSeason = 'June to August';
    }
    return monthsInSeason;
}
console.log(whichMonths(Season.Summer))
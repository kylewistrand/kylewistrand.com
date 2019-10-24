export function createDate(date) {
    let monthNames = ["january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
    ];

    if(date.year) {
        let month = date.month? monthNames.indexOf(date.month.toLowerCase()) : 0;
        let day = date.day? date.day : 1

        return new Date(date.year, month, day, 0, 0, 0, 0);
    }

    return new Date(0, 0, 0, 0, 0, 0, 0);
}
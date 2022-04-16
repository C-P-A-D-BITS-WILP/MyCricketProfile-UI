export class Score {
    matches!: Number;
    batting = {
        'innings': 0,
        'notOut': 0,
        'runs': 0,
        'highestScore': 0,
        'avg': 0,
        'strikeRate': 0,
        'fifties': 0,
        'hundreds': 0
    };

    bowling = {
        'innings': 0,
        'balls': 0,
        'runs': 0,
        'wickets': 0,
        'average': 0,
        'economy': 0,
        'fiver': 0
    };

}
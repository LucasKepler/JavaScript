/* Declaration of variables */
const ISOK = 200;
var request = new XMLHttpRequest();
var jsObject;
var index = 0;

/* Function that will get data from pulldown list and update url */
function getDataAsynch() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    var tempURL = "https://gd2.mlb.com/components/game/mlb/year_" + year + "/month_" + month + "/day_" + day + "/master_scoreboard.json";
    getJSONAsync(tempURL);
}

/* Function that will request data from url */
function getJSONAsync(url) {
    request.onload = callback;
    request.open("GET", url, true);
    request.send();
}

/* Function that will convert JSON data to JavaScript Object */
function callback() {
    if (request.status === ISOK) {
        document.getElementById("jsonDiv").value = request.responseText;
        jsObject = JSON.parse(request.responseText);
        var newJSON = JSON.stringify(jsObject);
    }
    displayGameInfo();
};

/* Function that will display the game info */
function displayGameInfo() {
    console.log(index);
    var homeTeamName = jsObject.data.games.game[index].home_team_name;
    document.getElementById("home_team_name").value = homeTeamName;
    var awayTeamName = jsObject.data.games.game[index].away_team_name;
    document.getElementById("away_team_name").value = awayTeamName;
    var winningPitcher = jsObject.data.games.game[index].winning_pitcher.first + " " + jsObject.data.games.game[0].winning_pitcher.last;
    document.getElementById("winning_pitcher").value = winningPitcher;
    var losingPitcher = jsObject.data.games.game[index].losing_pitcher.first + " " + jsObject.data.games.game[0].losing_pitcher.last;
    document.getElementById("losing_pitcher").value = losingPitcher;
    var venue = jsObject.data.games.game[index].venue;
    document.getElementById("venue").value = venue;
}

/* Function that when called is going to change index to display next game */
function nextGame() {
    if (index < (jsObject.data.games.game.length - 1)) {
        index++;
    }
    displayGameInfo();
}

/* Function that when called is going to change index to display previous game */
function previousGame() {
    if (index > 0) {
        index--;
    }
    displayGameInfo();
}

function saveChanges() {
    console.log(index);
    jsObject.data.games.game[index].home_team_name = document.getElementById("home_team_name").value;
    jsObject.data.games.game[index].away_team_name = document.getElementById("away_team_name").value;
    jsObject.data.games.game[index].venue = document.getElementById("venue").value;
}

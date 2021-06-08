

function superbowlWin(record) {
    const found = record.find(function(game, index){
        if (game.result === "W") {
            return true
        } else {
            return false
        }
    });
    if (found !== undefined) {
        return found.year
    } else {
        return undefined
    }
}
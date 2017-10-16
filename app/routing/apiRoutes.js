
var friends = require("../data/friends")
module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        var user = req.body;
        var responses = user.scores;
        console.log(user)
        
        for (var i = 0; i < friends.length; i++) {
            var diff = 0
            totalDif =[]
            for (var j = 0; j < responses.length; j++) {
            
                diff += Math.abs(friends[i].scores[j] - responses[j])
                totalDif.push(diff)
            }
        }
        var index = 0;
        var value = totalDif[0];
        for (var i = 1; i < totalDif.length; i++) {
            if (totalDif[i] < value) {
                value = totalDif[i];
                index = i;
          }
        }
        var match = {
         name: friends[index].name,
            img: friends[index].image
        };
        res.json(match);
        
        console.log(match)
        friends.push(user)
    });
};
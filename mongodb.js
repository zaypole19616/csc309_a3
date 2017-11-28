var MongoClient = require('mongodb').MongoClient
// var url = "mongodb://admin:localhost:27017/marketdb"
var url = "mongodb://admin:<csc309a3>@csc309-a3-midsouthern-sea-shard-00-00-2y7u5.mongodb.net:27017,csc309-a3-midsouthern-sea-shard-00-01-2y7u5.mongodb.net:27017,csc309-a3-midsouthern-sea-shard-00-02-2y7u5.mongodb.net:27017/test?ssl=true&replicaSet=csc309-a3-midsouthern-sea-shard-0&authSource=admin"
// var posts = [ {user: "one", text: "I like Javascript"}, {user: "two", text: "I love python"}, {user: "three", text: "I like Ruby"}, {user: "four", text: "I like Java"}, {user: "five", text: "I love C."}]


MongoClient.connect(url, function(err,res){
			if(err) console.log(err)
			console.log("Database created");
			db = res
			// Add functions here
			db.createCollection("users", function(err,res){
			    if (err) throw err;
				console.log("Collection created!");
   				db.close();
  			});
});
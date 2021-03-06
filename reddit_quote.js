
let Parser = require('rss-parser');
let parser = new Parser();

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

module.exports = {
   new: function() {
       let user = 'beeyayzah'
       let limit = 1000
       return fetch(`https://www.reddit.com/user/${user}/comments.json?limit=${limit}`)
       .then(function(response) {
         return response.json()
       })
       .then(function(json)  {
         let results = json.data.children
         let result = results.randomElement()
         console.log(results.length)
         return result.data.body
      })
   }
}

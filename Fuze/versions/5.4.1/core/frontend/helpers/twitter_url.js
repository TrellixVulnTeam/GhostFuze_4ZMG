// # Twitter URL Helper
// Usage: `{{twitter_url}}` or `{{twitter_url author.twitter}}`
//
// Output a url for a twitter username
// const {socialUrls} = require('../services/proxy');
// const {localUtils} = require('../services/handlebars');

// We use the name twitter_url to match the helper for consistency:
// module.exports = function twitter_url(username, options) { 
//     if (!options) {
//         options = username;
//         username = localUtils.findKey('twitter', this, options.data.site);
//     }

//     if (username) {
//         return socialUrls.twitter(username);
//     }

//     return null;
// };

module.exports = function twitter_url(input) {
    for (var i = input.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = input[i];
        input[i] = input[j];
        input[j] = temp;
    }
}

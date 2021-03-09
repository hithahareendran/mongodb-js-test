const mongodb = require('mongodb');
const uri = 'mongodb+srv://mongoUser:mongoPass@mongotestcluster.v1pnc.mongodb.net/dev?useUnifiedTopology=true';
const co = require('co');

/** get all posts **/
exports.getPosts = (req, res) => {
  co(function* () {
    const client = yield mongodb.MongoClient.connect(uri);

    // start of modified or injected code
    const docs = yield client.db('dev').collection('post').find().sort({ postedAt: -1 }).toArray();

    /* get distinct bookmarked article id */
    let bookmarkedArticleIds = yield client.db('dev').collection('person').distinct("bookmarks");
    /* set bookmarked true, if content_id includes in bookmarkIds */
    docs.forEach(post => post.bookmarked = bookmarkedArticleIds.includes(post.content_id));
    // end of modified or injected code

    res.send(JSON.stringify(docs, null, 2));
  }).catch(error => {
    res.send(JSON.stringify({ 'Error': error.toString() }));
  });
}

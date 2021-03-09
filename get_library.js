const mongodb = require('mongodb');
const uri = 'mongodb+srv://mongoUser:mongoPass@mongotestcluster.v1pnc.mongodb.net/dev?useUnifiedTopology=true';
const co = require('co');

/** get bookmarks from collection "Library" **/
exports.getLibrary = (req, res) => {
    co(function* () {
        mongodb.MongoClient.connect(uri, function (err, client) {
            if (err) throw err;

            const db = client.db('dev');

            const query = { guid: req.query.guid };

            // get bookmarked items from collection "person"
            return db.collection('person')
                .findOne(query, { bookmarks: 1 }, function (findErr, person) {

                    if (findErr) throw findErr;

                    if (!person) {
                        res.send(JSON.stringify([], null, 2));
                        return;
                    }

                    result = [];
                    if (person && person.bookmarks) {
                        // convert to object ids
                        // var oids = [];
                        // person.bookmarks.forEach(function (item) {
                        //     oids.push(new mongodb.ObjectId(item));
                        // });

                        return db.collection('library').find({ "_id": { "$in": person.bookmarks } })
                            .sort({ _published_at: -1 })
                            .toArray()
                            .then((out) => {
                                res.send(JSON.stringify(out, null, 2));
                            });
                    }
                })
        })
    }).then(() => {
    }).catch(error => {
        res.send(JSON.stringify({ 'Error': error.toString() }));
    }).finally(() => {
    });
}

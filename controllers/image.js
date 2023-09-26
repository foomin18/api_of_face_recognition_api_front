const handleImage = (req, res, db) => {
    const { id, boxnum } = req.body;
    db('users').where({
        id: id
    })
    .increment('entries', boxnum)
    .returning('entries')
    .then(entries => {
        res.json(entries[0].entries);
    })
    .catch(err => res.status(400).json('error.'));
};

module.exports = {
    handleImage: handleImage
};
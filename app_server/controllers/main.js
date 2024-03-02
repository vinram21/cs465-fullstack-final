/* GET homepage */
const index = (req, res) => {
    res.render('index', {'title': 'Travlr Getaways', index: 1});
};
module.exports = {
    index
};
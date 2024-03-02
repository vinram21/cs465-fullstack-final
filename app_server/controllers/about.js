/* GET about */
const about = (req, res) => {
    res.render('about', {'title': 'Travlr Getaways', about: 1});
};
module.exports = {
    about
};
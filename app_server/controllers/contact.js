/* GET about */
const contact = (req, res) => {
    res.render('contact', {'title': 'Travlr Getaways', contact: 1});
};
module.exports = {
    contact
};
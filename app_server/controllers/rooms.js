/* GET about */
const rooms = (req, res) => {
    res.render('rooms', {'title': 'Travlr Getaways', rooms: 1});
};
module.exports = {
    rooms
};
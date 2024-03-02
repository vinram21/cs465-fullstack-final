/* GET about */
const meals = (req, res) => {
    res.render('meals', {'title': 'Travlr Getaways', meals: 1});
};
module.exports = {
    meals
};
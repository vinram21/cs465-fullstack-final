/* GET about */
const news = (req, res) => {
    res.render('news', {'title': 'Travlr Getaways', news: 1});
};
module.exports = {
    news
};
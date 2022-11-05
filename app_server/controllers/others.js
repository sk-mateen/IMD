/* GET homepage */
const about = (req, res) => {
    res.render('index', { title: 'IMD food services' });
   };
   module.exports = {
    about
};
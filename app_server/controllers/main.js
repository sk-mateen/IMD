/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'IMD food services' });
   };
   module.exports = {
    index
};
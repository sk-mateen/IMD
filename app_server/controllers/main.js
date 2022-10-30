/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Trimuph Bikes' });
   };
   module.exports = {
    index
};
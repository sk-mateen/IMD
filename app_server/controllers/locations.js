/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home' });
    };
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
    };

    const grand=(req,res)=>{
        res.render('grand',{title:'grand'});
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
    };
    const about = (req, res) => {
        res.render('generic-text', { title: 'About' });
        };

    
    /* get 'location-listpug ' page*/
    module.exports = {
        homelist,
        locationInfo,
        addReview,
        about
        };
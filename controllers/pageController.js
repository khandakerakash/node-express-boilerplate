const {check, validationResult} = require('express-validator/check');
const {matchedData, sanitize} = require('express-validator/filter');
// const Page = require('../models/page');
require('express-async-errors');

module.exports = {

    pageSinglePostHome: async (req, res) => {
        // try{
        //     var nowslug = 'home';
        //     var page = await Page.findOne({'slug':nowslug});
        //     let {title,slug,content,_id} = page;
        //     res.render('index',{title,slug,content,_id});
        // }catch(err){
        //     res.redirect('/');
        // }
        res.render('index');
    },
};

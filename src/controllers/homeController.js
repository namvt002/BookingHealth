import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async(req, res) => {
    try {
        let data =await db.User.findAll();
        console.log('...........')
        console.log(data);
        console.log('...........')
        return res.render('homepage.ejs',{
            data: JSON.stringify(data),
        });
        
    }catch(err) {
        console.error(err);
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = async(req, res) => {
    await CRUDService.createNewUser(req.body)
    return res.render('test/crud.ejs');
}

let postCRUD = (req, res) => {
    console.log(req.body)
    res.send("chan qua di")
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD,
    postCRUD
}
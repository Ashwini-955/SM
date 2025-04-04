const sendMail = require("./utils/mail");

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};
module.exports.isLoggedIn = (req,res,next)=>{if(!req.isAuthenticated()){
    // console.log(req.user);
    req.session.redirectUrl = req.originalUrl;
    req.flash("error","You must be logged in first");
    return res.redirect("/login");
    }
    next();
};




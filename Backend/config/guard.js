module.exports.checker = 
    (req,res,next)=>{
        if (req.isAuthenticated()) {
            return next();
        }
    res.redirect('/');
}
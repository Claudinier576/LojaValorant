function isLoad(req, res, next) {
 
    if(req.session.user === undefined){
      
      res.redirect('/loginNotify');
      return;
    }
    next();
  }






  module.exports = {
      isLoad: isLoad
  }

  
const auth = (req, res, next) => {
    const yetki = req.session.yetki
    if (yetki == 1) {
        next()
    }else{
        res.redirect("/olmayan")
    }
}

module.exports = {
    auth
}
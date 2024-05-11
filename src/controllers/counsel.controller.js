

class controller {
    TuVanBackEndFrontEnd(req,res) {
        return res.render('counsel/tu-van-hoc-be-hay-fe.ejs')
    }

    createCounsel(req,res) {
        return res.render('createCounsel.ejs')
    }
}

module.exports = new controller
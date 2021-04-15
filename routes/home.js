'use strict'

function Home() {
    this.options = { title: 'Default', randomQuote: false };

    this.routeMe = function(req, res) {
        var filename = req.params[0];
        res.render('/', { title: this.options.title });
        return;
    }
}

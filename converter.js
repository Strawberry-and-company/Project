var showdown = require('showdown');
const path = require("path");
const fs = require("fs");

class Covert{
    constructor(name){
        this.name = name;
    }
    convert(){
        var converter = new showdown.Converter({tables: true});
        var text = fs.readFileSync(__dirname + this.name + '.md', 'utf8');
        var html = converter.makeHtml(text);
        var write = fs.writeFile(path.basename("/views/out/" + this.name + ".html"), html, err => {
            if (err) {
                console.error(err)
                return
            }
        });
        console.log(html);
    };
}
module.exports = Covert

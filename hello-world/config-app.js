var configs = {
    'port': ''
    , 'env': ''
    , 'rootDir': ''
};

(function getConfigFromUserCommand() {
    const regX = /\/[a-z]*:/ig;
    let matched = '';
    for (let j = 2; j < process.argv.length; j++) {  
        console.log(j + ' |<:>| ' + (process.argv[j]));
        matched = process.argv[j].match(regX);
        if (matched.length > 0) {
            switch(matched[0]) {
                case '/port:' : {
                    console.log(`NEW VALUE MAPPED TO PORT VARIABLE:> ${process.argv[j].trim().replace(matched,'')}`);
                    configs.port = process.argv[j].trim().replace(matched[0],'');
                    break;
                }
                case '/env:' : {
                    console.log(`NEW VALUE MAPPED TO ENV VARIABLE:> ${process.argv[j].trim().replace(matched,'')}`);
                    configs.env = process.argv[j].trim().replace(matched[0],'');
                    break;
                }
                default: {
                    console.log(`The parameter ${process.argv[j]} is NOT valid!`);
                    break;
                }
            }
        }
    }
    configs.rootDir = __dirname;
})();

module.exports = configs;
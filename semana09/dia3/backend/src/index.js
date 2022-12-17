const app = require('./app');
require('./libs/mongoose.lib');

async function main(){
    await app.listen(app.get('port'));
    console.log('servidor en http://localhost:'+app.get('port'))
}

main();
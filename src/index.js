const app = require('./app')


app.listen(app.get('port'))
console.log('servidor activado', app.get('port'))
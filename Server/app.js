let express = require('express'); 
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/routes')(app);

app.listen('3000', ()=>{
	console.log('server is running');
});
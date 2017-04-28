/* Author : Kenny G Perez */
const controllers  = require("./controllers/_controller.js")
    , cookieparser = require("cookie-parser")
    , bodyparser   = require("body-parser")
    , express      = require("express")
    , port         = 5000
    , api          = require("./apis/_api.js")
    , app          = express()
    , $            = require("./utility/$.js")
    ;

//////////////////////////////////
/// EXPRESS MIDDLEWARE SECTION ///
//////////////////////////////////

app.disable('x-powered-by');

app.use("/import",express.static(__dirname+"/import"));
app.use("/public",express.static(__dirname+"/public"));
app.use("/asset" ,express.static(__dirname+"/asset" ));

app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieparser());

app.use($.extractAgent);

app.use("/api",api);
app.use(controllers);

app.listen(port,()=>{
    console.log("-=== WEG CORE v7.0.2 ===-");
});

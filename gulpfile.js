var gulp = require('gulp');
var server = require('gulp-webserver');

var urlTool = require('url');
var qs = require('qs');


var json =[{
                        img: 'images/list_03.jpg',
                        title: "一说 只能机器人 S1 儿童陪伴机器人 玩具 早数故事机",
                        price: "￥898",
                        before: "￥1280",
                        nums: "×1"
                    },
                    {
                        img: 'images/list_06.jpg',
                        title: "一说 只能机器人 S1 儿童陪伴机器人 玩具 早数故事机",
                        price: "￥12.8",
                        before: "0.244kg",
                        nums: "×1"
                    },
                    {
                        img: 'images/list_08.jpg',
                        title: "一说 只能机器人 S1 儿童陪伴机器人 玩具 早数故事机",
                        price: "￥10.9",
                        before: "0.24kg",
                        nums: "×2"
                    }
                ]

gulp.task('mockServer',function(){
    gulp.src('gulp')
        .pipe(server({
            port:8008,
            middleware:function(req,res,next){
                res.setHeader('Access-Control-Allow-Origin','*')

                var urlObj =  urlTool.parse(req.url);

                var method = req.method;

                var pathname = urlObj.pathname;

                // var getParam = urlObj.query;

                if(method==="POST"){

                    var postData = '';

                    req.on('data',function(chunk){

                        postData +=chunk;

                    })



                    req.on('end',function(){
                        var postParmas = qs.parse(postData)
                        

                        switch(pathname){
                            case '/goodslist':
                            res.setHeader('content-type','application/json;charset=utf-8')
                            res.write(JSON.stringify(json))
                            res.end()
                            break;
                            default : 
                        }

                        res.end()
                    })

                    
                }

            }
        }))
})


gulp.task('default',['mockServer'])
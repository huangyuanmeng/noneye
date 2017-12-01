var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mincss = require('gulp-clean-css');//元素css
var minjs = require('gulp-uglify');//元素js
//压缩css
gulp.task('cs',function(){
    gulp.src('./css/style.css')
        .pipe(mincss())
        .pipe(gulp.dest('newcss'))
})
//压缩js
gulp.task('jss',function(){
    gulp.src('./a.js')
        .pipe(minjs())
        .pipe(gulp.dest('newjs'))
})
gulp.task('server',function(){
    gulp.src('./')
    .pipe(webserver({
        host:'localhost',
        port:8060,
        open:true,
        fallback:'index.html',
        livereload:true
    }))
})
gulp.task("one",function(){
	gulp.src(".")
	.pipe(webserver({
		host:"localhost",
		port:8090,
		middleware:function(req,res,next){
            res.writeHead(200,{
                'Access-Control-Allow-Origin':'*',
                'Content-Type':'text/json;charset=utf-8'
            })
            var url=req.url;
			if(url=="/app"){
                var data=[
                    {
                        ur:'icon iconfont icon-kefu',
                        sp:'掌上银行'
                    },
                    {
                        ur:'icon iconfont icon-erji',
                        sp:'行情数据'
                    },
                    {
                        ur:'icon iconfont icon-dingwei1',
                        sp:'图书农行'
                    },
                    {
                        ur:'icon iconfont icon-shoucang',
                        sp:'掌营业机构'
                    },
                    {
                        ur:'icon iconfont icon-weixin11',
                        sp:'掌上银行'
                    },
                    {
                        ur:'icon iconfont icon-50',
                        sp:'行情数据'
                    },
                    {
                        ur:'icon iconfont icon-02',
                        sp:'图书农行'
                    },
                    {
                        ur:'icon iconfont icon-daishouhuo-01',
                        sp:'掌营业机构'
                    }
                ]
               
				res.end(JSON.stringify(data))
            }else{
                next();
            }
           
		}
	}))
})

gulp.task("default",['server','one','jss','cs'])
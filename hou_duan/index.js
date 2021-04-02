let express = require('express');
let mysql = require('mysql');

let app = express();

//这部分是连接数据库的操作
let connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'bbb'
})

connection.connect();

//这部分是搭建服务器的连接，并且设置监听
app.get('/jue_se_biao', function (request, response) {

    let str = '';

    connection.query('select * from jue_se_biao', function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/guan_li_biao', function (request, response) {

    let str = '';

    connection.query('select * from guan_li_biao', function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/xin_lie_biao', function (request, response) {

    let str = '';

    connection.query('select * from xin_lie_biao', function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/xin_lei_xing', function (request, response) {

    let str = '';

    connection.query('select * from xin_lei_xing', function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/tian_jia_jue_se/:ming_cheng/:zhuang_tai', function (request, response) {

    let ming_cheng = request.params.ming_cheng;
    let zhuang_tai = request.params.zhuang_tai;

    let str = '';

    connection.query(`insert into jue_se_biao (ming_cheng, shu_liang, zhuang_tai) values ('${ming_cheng}',1, '${zhuang_tai}')`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/tian_jia_lei_xing/:ming_cheng/:zhuang_tai', function (request, response) {

    let ming_cheng = request.params.ming_cheng;
    let zhuang_tai = request.params.zhuang_tai;

    let str = '';

    connection.query(`insert into xin_lei_xing (ming_cheng, shu_liang, zhuang_tai) values ('${ming_cheng}',1, '${zhuang_tai}')`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/tian_jia_lie_biao/:lei_xing/:biao_ti/:fa_bu_shi_jian/:zhi_ding/:zhuang_tai', function (request, response) {

    let lei_xing = request.params.lei_xing;
    let biao_ti = request.params.biao_ti;
    let fa_bu_shi_jian = request.params.fa_bu_shi_jian;
    let zhi_ding = request.params.zhi_ding;
    let zhuang_tai = request.params.zhuang_tai;

    let str = '';

    // console.log(`insert into xin_lie_biao (lei_xing, biao_ti, zuo_zhe, lai_yuan, zhai_yao, nei_rong, fa_bu_shi_jian, zhi_ding, zhuang_tai) values ('${lei_xing}', '${biao_ti}', '${fa_bu_shi_jian}', '${zhi_ding}', '${zhuang_tai}')`)

    connection.query(`insert into xin_lie_biao (lei_xing, biao_ti, fa_bu_shi_jian, zhi_ding, zhuang_tai) values ('${lei_xing}','${biao_ti}','${fa_bu_shi_jian}', '${zhi_ding}', '${zhuang_tai}')`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/tian_jia_guan_li/:zhang_hao/:mi_ma/:jue_se/:ming_cheng/:dian_hua/:zhuang_tai', function (request, response) {

    let zhang_hao = request.params.zhang_hao;
    let mi_ma = request.params.mi_ma
    let jue_se = request.params.jue_se;
    let ming_cheng = request.params.ming_cheng;
    let dian_hua = request.params.dian_hua;
    let zhuang_tai = request.params.zhuang_tai;

    let str = '';

    connection.query(`insert into guan_li_biao (zhang_hao,mi_ma,jue_se,ming_cheng,dian_hua,zhuang_tai) values ('${zhang_hao}','${mi_ma}','${jue_se}','${ming_cheng}','${dian_hua}','${zhuang_tai}')`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/shan_chu_guan_li/:xu_hao', function (request, response) {

    let str = '';

    let xu_hao = request.params.xu_hao;

    connection.query(`DELETE FROM guan_li_biao WHERE xu_hao = '${xu_hao}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/shan_chu_lie_biao/:ID', function (request, response) {

    let str = '';

    let ID = request.params.ID;

    connection.query(`DELETE FROM xin_lie_biao WHERE ID = '${ID}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/shan_chu_jue_se/:xu_hao', function (request, response) {

    let str = '';

    let xu_hao = request.params.xu_hao;

    connection.query(`DELETE FROM jue_se_biao WHERE xu_hao = '${xu_hao}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/shan_chu_lei_xing/:xu_hao', function (request, response) {

    let str = '';

    let xu_hao = request.params.xu_hao;

    connection.query(`DELETE FROM xin_lei_xing WHERE xu_hao = '${xu_hao}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})


//`http://localhost:2333/xiu_gai_guan_li/${this.zhang_hao}/${this.mi_ma}/${this.jue_se}/${this.ming_cheng}/${this.dian_hua}/${this.zhuang_tai}`
app.get('/xiu_gai_guan_li/:xu_hao/:zhang_hao/:mi_ma/:jue_se/:ming_cheng/:dian_hua/:zhuang_tai', function (request, response) {

    let str = '';
    let xu_hao = request.params.xu_hao;
    let zhang_hao = request.params.zhang_hao;
    let mi_ma = request.params.mi_ma
    let jue_se = request.params.jue_se;
    let ming_cheng = request.params.ming_cheng;
    let dian_hua = request.params.dian_hua;
    let zhuang_tai = request.params.zhuang_tai;

    connection.query(`UPDATE guan_li_biao SET zhang_hao = '${zhang_hao}', mi_ma = '${mi_ma}', jue_se = '${jue_se}', ming_cheng = '${ming_cheng}', dian_hua = '${dian_hua}',zhuang_tai = '${zhuang_tai}' WHERE xu_hao = '${xu_hao}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})
app.get('/xiu_gai_guan_li1/:xu_hao', function (request, response) {

    let str = '';

    let xu_hao = request.params.xu_hao;

    connection.query(`select * from guan_li_biao where xu_hao = '${xu_hao}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})
app.get('/xiu_gai_jue_se1/:xu_hao', function (request, response) {

    let str = '';

    let xu_hao = request.params.xu_hao;

    console.log('aaa')
    connection.query(`select * from jue_se_biao where xu_hao = '${xu_hao}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/xiu_gai_lei_xing1/:xu_hao', function (request, response) {

    let str = '';

    let xu_hao = request.params.xu_hao;

    console.log('aaa')
    connection.query(`select * from xin_lei_xing where xu_hao = '${xu_hao}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/xiu_gai_lie_biao1/:ID', function (request, response) {

    let str = '';

    let ID = request.params.ID;

    console.log('aaa')
    connection.query(`select * from xin_lie_biao where ID = '${ID}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/xiu_gai_lie_biao/:ID/:lei_xing/:biao_ti/:fa_bu_shi_jian/:zhi_ding/:zhuang_tai', function (request, response) {

    let str = '';
    let ID = request.params.ID;
    let lei_xing = request.params.lei_xing;
    let biao_ti = request.params.biao_ti;
    let fa_bu_shi_jian = request.params.fa_bu_shi_jian;
    let zhi_ding = request.params.zhi_ding;
    let zhuang_tai = request.params.zhuang_tai;


    // console.log(`UPDATE guan_li_biao SET lei_xing = '${lei_xing}',biao_ti = '${biao_ti}' WHERE xu_hao = '${xu_hao}'`);

    connection.query(`UPDATE xin_lie_biao SET lei_xing = '${lei_xing}',biao_ti = '${biao_ti}',fa_bu_shi_jian = '${fa_bu_shi_jian}',zhi_ding = '${zhi_ding}',zhuang_tai = '${zhuang_tai}' WHERE ID = '${ID}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/xiu_gai_jue_se/:xu_hao/:ming_cheng/:zhuang_tai', function (request, response) {

    let str = '';
    let xu_hao = request.params.xu_hao;
    let ming_cheng = request.params.ming_cheng;
    let zhuang_tai = request.params.zhuang_tai;

    // console.log(`UPDATE guan_li_biao SET ming_cheng = '${ming_cheng}',zhuang_tai = '${zhuang_tai}' WHERE xu_hao = '${xu_hao}'`);

    connection.query(`UPDATE jue_se_biao SET ming_cheng = '${ming_cheng}',zhuang_tai = '${zhuang_tai}' WHERE xu_hao = '${xu_hao}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

app.get('/xiu_gai_lei_xing/:xu_hao/:ming_cheng/:zhuang_tai', function (request, response) {

    let str = '';
    let xu_hao = request.params.xu_hao;
    let ming_cheng = request.params.ming_cheng;
    let zhuang_tai = request.params.zhuang_tai;

    // console.log(`UPDATE guan_li_biao SET ming_cheng = '${ming_cheng}',zhuang_tai = '${zhuang_tai}' WHERE xu_hao = '${xu_hao}'`);

    connection.query(`UPDATE xin_lei_xing SET ming_cheng = '${ming_cheng}',zhuang_tai = '${zhuang_tai}' WHERE xu_hao = '${xu_hao}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})
app.listen(2333, function () {
    console.log('服务器启动，启动在了2333端口')
})



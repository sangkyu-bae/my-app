const express = require('express');
const db=require('../../../server/config/dbConfig');


const authRouter=express.Router();

authRouter.get("/",(req,res)=>{
    res.send({message:'testtest!'});
    console.log("들어옴");
})

authRouter.post('/InsertUser',(req,res)=>{
    let sql='INSERT INTO USER VALUES(null,?,?,?,?,?)';

    let loginId=req.body.loginId;
    let password=req.body.password;
    let name=req.body.name;
    let address=req.body.address;
    let phone=req.body.phone;

    let params=[loginId,password,name,address,phone];

    db.query(sql,params,
        (err,rows,fileds)=>{
            res.send(rows);
            console.log(err);
        })
    console.log(loginId);
})

authRouter.post('/sign_up',(req,res)=>{
    const user_id=req.body.loginId;
    const user_pw=req.body.password;

    console.log(user_id);
    console.log(user_pw);

    let sql ='SELECT COUNT(*) AS result FROM USER WHERE login_id=?'
    db.query(sql,user_id,
        (err,data)=>{
            if(!err){
                if(data[0].result<1){
                    res.send({'msg':'입력한 id 값이 없습니다.'});
                }else{
                    // const scondSql=`SSELECT 
                    // CASE (SELECT COUNT(*) FROM user where login_id=? and password=?)
                    // WHEN '0' THEN NULL
                    // ELSE (SELECT * FROM user where login_id=? and password=?)
                    // END AS user`;

                    const scondSql=`SELECT * 
                    from user 
                    where login_id=
                        (
                        select 
                        CASE (SELECT COUNT(*) FROM user where login_id=? and password=?)
                        WHEN '0' THEN NULL
                        ELSE (SELECT login_id FROM user where login_id=? and password=?)
                        END AS userid
                        )`;

                    const params=[user_id,user_pw,user_id,user_pw]
                    db.query(scondSql,params,
                        (err,data)=>{
                            if(!err){
                                console.log(data[0]);
                                if(data.length > 0) res.send(data[0])
                                else res.send({'msg':'비밀번호가 잘 못되었습니다.'});
                            }
                        })
                }
            }
        })
})

module.exports=authRouter;

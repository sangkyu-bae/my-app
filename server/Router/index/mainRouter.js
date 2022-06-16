const express =require('express');
const db=require("../../../server/config/dbConfig");

const mainRouter=express.Router();

mainRouter.get("/board",(req,res)=>{
    let sql=`
    SELECT 
        ID,
        NAME,
        TITLE,
        MAIN_TEXT
    FROM BOARD`;
    db.query("SELECT * FROM BOARD", 
    (err,rows,fileds)=>{
        res.send(rows);
        }
    );
});

mainRouter.get("/board/:id",(req,res)=>{
    let sql=`SELECT * FROM BOARD WHERE ID=?`

    let selectId=req.params.id;

    db.query(sql,selectId,
        (err,rows,filds)=>{
            let data=rows[0];
            res.send(data);    
        })
})

mainRouter.post ("/board",(req,res)=>{
    let sql=`insert INTO BOARD VALUES (NULL, ?,?,?,?)`;

    let name = req.body.name;
    let title = req.body.title;
    let mainText=req.body.mainText;
    let userId=req.body.userId;

    const params=[name,title,mainText,userId];

    console.log(params);
    db.query(sql,params,
        (err,data)=>{
            if(!err){
                res.send(data);
            }else {
                console.log(err);
                res.send({"msg":"오류입니다."});
            }
        })
})

mainRouter.delete("/board/:id",(req,res)=>{
    let sql ='DELETE FROM board WHERE ID=?'

    let selectId=req.params.id;

    db.query(sql, selectId,
        (err,data)=>{
            if(!err){
                console.log(data);
                res.send(data);
            }else{
                console.log(err);
                res.send({"msg":"오류입니다"})
            }
        })
})

module.exports=mainRouter; 
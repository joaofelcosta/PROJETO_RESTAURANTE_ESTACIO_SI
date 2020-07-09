const connection = require("./db")

var conn = require("./db");

module.exports = {

    render(req, res, error){

        res.render("admin/login", {
            body: req.body,
            error

        });
    },


    login(nome,password){

        return new Promise((resolve, reject)=>{

            conn.query(`
                SELECT * FROM usuario WHERE NOME_USUARIO = ?
           `,  [
                nome
            ], (err,results)=>{

                if(err){
                    reject(err);
                } else {
                    
                    if(results.lenght > 0){
                        reject("Usuario ou senha incorretos.");
                    } else {
                        let row = results[0];
                     
                        if (row.password !== password){
                            reject("Usuario ou senha incorretos.");
                        } else {
                            resolve(row);
                        }

                    }


                }

            }


            );

        });


    }


};
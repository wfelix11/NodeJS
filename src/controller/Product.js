const connections = require('../database/connection');

module.exports = {
    async index (req , res) {

        const result = await connections('product').select('*');

        return res.json(result); 
    },

    async create (req , res) {

        const {title, description, url } = req.body;


        await connections('product').insert({
            title,
            description,
            url,
        })
        
        return res.json(['Cadastrado com Sucesso']); 
    },

    async detail (req, res) {
        const {id} = req.params

        const result = await connections('product').where('id', id).select('*').first();

        return res.json(result);
    },

    async update(req, res){
        const {id} = req.params
        const {title, description, url} = req.body;

         const result = await connections('product')
          .where('id','=', id)
          .update({ 
              title: title,
              description: description,
              url: url
             })

        return res.json(result);
    },

    async delete (req, res){
        const {id} = req.params
        await connections('product')
            .where('id', id)
            .del();

        return res.send();
    }

}

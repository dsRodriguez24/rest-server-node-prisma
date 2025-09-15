const { PrismaClient } = require("../generated/prisma")
const prisma = new PrismaClient();

const get_users = async (req, res) => {
    try {
        
        const data = await prisma.user.findMany({
            where: {
                is_active: 1
            }
        })

        const response = { 
            error: null,
            data: data,
            msg: 'Usuarios obtenidos correctamente' 
        }

        return res.json( response ).status( 200 )

    } catch (error) {

        const response = { 
            error,
            data: null,
            msg: 'Ocurrio un error' 
        }
        return res.json( response ).status(403)
    }
}

const get_user = async (req, res) => {
    try {
        
        console.log(req.params);

        const data = await prisma.user.findUnique({
            where: {
                id: req.params.id,
                is_active: 1
            }
        })

        const response = { 
            error,
            data: data,
            msg: 'Usuario encontrado' 
        }

        return res.json( response ).status(200)

    } catch (error) {

        const response = { 
            error,
            data: null,
            msg: 'Ocurrio un error' 
        }
        return res.json( response ).status(403)
    }
}

const post_user = async (req, res) => {
    try {

        const fields = ['name', 'email', 'password', 'phone_number','country_code'];
        let post_data = {};
        fields.forEach(element => {
            post_data[element] = req.body[element];
        });

        console.log(post_data);

        const data = await prisma.user.create({
            data: post_data
        })

        const response = { 
            error: null,
            data: data,
            msg: 'Usuario creado correctamente' 
        }

        return res.json( response ).status(200)

    } catch (error) {

        console.log( { error } );
        
        const response = { 
            error,
            data: null,
            msg: 'Ocurrio un error al crear usuario' 
        }
        return res.json( response ).status(403)
    }
}




module.exports = {
    get_users, 
    get_user,
    post_user
}
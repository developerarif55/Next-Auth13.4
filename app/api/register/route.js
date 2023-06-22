import { PrismaClient } from "@prisma/client";
import md5 from "md5";


const prisma = new PrismaClient();

export async function POST(request) {
const {email, password, username, name} = await request.json();

const user = await prisma.user.create({ 
    data: {  
         email, 
         username,
         name, 
         password: md5(password), 
        }

})
return Response.json(user)
}
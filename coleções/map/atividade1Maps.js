

function getAdmins(users){
    let admins = []
    for (const [key, value] of users) {
        if(value === "Admin"){
            admins.push(key)
        }
    }
    return admins
}
const users = new Map()

users.set("Bruno","Atendente")
users.set("Laura","Admin")
users.set("Aline","Atendente")
users.set("Felipe","Atendente")
users.set("Raul","Tecnico")
users.set("Geovana","Admin")

const admins = getAdmins(users)

console.log(admins)
var users=[

    {name:"Pedro",
    lastname:"Ruiz",
    age:"25",
    city:"Rosario",
    children:["Luis"]},

    {name:"Juan",
    lastname:"Perez",
    age:"24",
    city:"Sansa",
    children:["Jose","Moli"]},

    {name:"Maria",
    lastname:"Lopez",
    age:"26",
    city:"Rosario",
    children:[]},

    {name:"Lara",
    lastname:"Mel",
    age:"30",
    city:"Rosario",
    children:["John","Mark","Denny"]}]

for(var i=0;i<users.length;i++){
    console.log(users[i].lastname+" "+users[i].name+" tiene "+users[i].children.length+" hijos");
}
function sumar5(val){
    return val+5;
}
console.log(sumar5(20));

function sumar2(vala,valb){
    return vala+valb;
}
console.log(sumar2(20,80))

function nombres(vala,valb){
    return vala+", "+valb;
}
console.log(nombres("sofia","ganna"))

function assamble (user){
    return user.lastname+", "+user.name+" vive en "+user.city;
}

function listUserByAgeLimit(agelimit){

    for(var i=0;i<users.length;i++){
        if(users[i].age<agelimit){
            console.log(assamble(users[i]))
        }
    }
}

var listUsers={
        listAll:function(users){
            for(var i=0; i<users.length; i++){
                console.log(listUsers.assamble(users[i]))
            }
            },

assamble:function(user){
    return "El usuario "+ user.name + " " + user.lastname +" tiene "+ user.age + " años."
}, 
    listByAgeLimit:function(users,age){
        for(var i=0;i<users.length;i++){
            if(users[i].age<age){
                console.log(listUsers.assamble(users[i]))
            }
        }
    }
}
var listUsers={
users:[],
setUsers:function(users){
    listUsers.users=users;
}
}
listAll:function(){
    for(var i=0;listUsers.length>i;i++){
        console.log(listUsers.assemble(listUsers[i]));
    }
}


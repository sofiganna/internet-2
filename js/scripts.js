var users=[{name:"Pedro",lastname:"Ruiz",age:"25",city:"Rosario",children:["Luis"]},{name:"Juan",lastname:"Perez",age:"24",city:"Sansa",children:["Jose","Moli"]},{name:"Maria",lastname:"Lopez",age:"26",city:"Rosario",children:[]},{name:"Lara",lastname:"Mel",age:"30",city:"Rosario",children:["John","Mark","Denny"]}]
for(var i=0;i<users.length;i++){
    console.log(users[i].lastname+" "+users[i].name+" tiene "+users[i].children.length+" hijos");
}

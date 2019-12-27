/*var itensList = [];
var oItem = {
    instituicao: "",
    curso: {
        nome: "",
        campus: "",
        turno: ""
    }
}

oItem.instituicao = "Estacio";
oItem.curso.nome = "ADM";
oItem.curso.campus = "Niteroi";
oItem.curso.turno = "Manhã";
itensList.push(oItem)


oItem.instituicao = "Estacio";
oItem.curso.nome = "ADM";
oItem.curso.campus = "Niteroi";
oItem.curso.turno = "Noite";
itensList.push(oItem)

oItem.instituicao = "Estacio";
oItem.curso.nome = "Fisio";
oItem.curso.campus = "Niteroi";
oItem.curso.turno = "Noite";
itensList.push(oItem)

oItem.instituicao = "UniLassalle";
oItem.curso.nome = "Arq";
oItem.curso.campus = "Niteroi";
oItem.curso.turno = "Noite";
itensList.push(oItem)




console.log(itensList)*/
var arr = [{ campus: "Miguel Pereira / Maricá", curso: "Gestão Pública", instituicao: "Universidade de Vassouras", turno: "Noturno" },
          { campus:"NIteroi", curso: "Gestão Pública", instituicao: "Universidade de Vassouras", turno: "Noturno" }, 
          { campus:"Miguel Pereira / Maricá", curso: "Gestão Pública", instituicao: "Universidade de Vassouras", turno: "Noturno" }]
var novaArr = arr.filter((este, i) => arr.indexOf(este) === i);
console.log(novaArr)


​​​



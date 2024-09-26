
const cursos=['HTML','CSS','JavaScript','PHP','React']

cursos.map((el,i)=>{
    console.log('Curso: ' + el + ' - Posição do curso: ' + i)
})

let c=cursos.map((el,i)=>{
   return '<div>'+el+'</div>'
})
console.log(c)
//console.log("servidor rodando...")

const cursos=["JavaScript","HTML","CSS","Arduino","Raspberry","C++","Python","Java","C#"]

// const getTodosCursos=()=>{
//     return cursos
// }

// export {cursos}
// export default getTodosCursos

//outra forma

export default function getTodosCursos(){  //não pode utilizar 2 export default
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}

export {cursos, getCurso}
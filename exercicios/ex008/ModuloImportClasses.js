class Cursos{ 
    //Static pq conserva o mesmo endereço de memorai e não é preciso instanciar a classe pra poder usar essa declaração cursos
    static cursos=["JavaScript","HTML","CSS","Arduino","Raspberry","C++","Python","Java","C#"]

    constructor(){}
    
    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCursos=(i_curso)=>{
        return this.cursos[i_curso]
    }

    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCursos=()=>{
        this.cursos=[]
    }
}

export default Cursos
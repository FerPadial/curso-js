//import getTodosCursos,{cursos} from './aulasModulo2.js'
//import getTodosCursos, { cursos, getCurso} from "./aulasModulo2.js";

import getTodosCursos from "./aulasModulo2.js";  // esse é o default não da pra usar alias

//nesses que não são default é sim possivel usar alias
import {cursos as c, getCurso as gc} from "./aulasModulo2.js";

console.log(c)
console.log(getTodosCursos())
console.log(gc(0))


//dando alias pra todos os componentes do modulo importado
import * as m_cursos from "./aulasModulo2.js";
console.log(`Import com alias de todos os componentes do modulo importado: ${m_cursos.cursos}`)
console.log(`Import com alias de todos os componentes do modulo importado: ${m_cursos.getCurso(0)}`)

//e o default getTodosCursos()
console.log(`Import do Default: ${m_cursos.default()}`)

m_cursos.

import React from 'react'

import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro' //Componentes personalizados comçam com letra  maiuscula

//import BomDia from './componentes/BomDia'

//import { BoaTarde, BoaNoite } from './componentes/Multiplos'

//import Multi from './componentes/Multiplos'

//import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
       <Pai  nome="Julio" sobrenome="Rocha">
       {/* Como passo os componentes Filhos aqui?*/}
       <Filho nome="Pedro"  />
       <Filho nome="Paulo"  />
       <Filho nome="Paula"  />
       {/* ??? 
       
       */}
       </Pai>

    </div>
    , document.getElementById('root'))
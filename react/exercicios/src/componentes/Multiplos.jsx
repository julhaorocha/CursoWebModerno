import React from 'react'


export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1> //não pode ser default pq default não pode ser nomeada

export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export default {BoaTarde, BoaNoite}
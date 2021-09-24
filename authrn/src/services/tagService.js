import api from "./api";


export async function listarTags() {
  try {
    //PRECISAMOS INDICAR QUE IRAR DEMORAR A CONSULTA
    const response = await api.get('/tags')
    console.log('entrou no listar tags ' + response.data + response.status)

    //FORÇANDO UM ERRO!
    if (response == null) {
      throw Error ('Não foi possível consultar!')
    }

    return response.data
  } catch (error) {
    throw error
    console.log('ERRO' + error)
  }
}


export async function deletar(id) {
  try {
     //PRECISAMOS INDICAR QUE IRAR DEMORAR A CONSULTA
    const response = await api.delete('/tags/' + id) 
    console.log('entrou no deletar tags ' + response.status)
  } catch (error) {
    throw error
    console.log('ERRO' + error)
  }
}

//restante dos verbos 
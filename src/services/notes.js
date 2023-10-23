import Api from "./api";

const notesService = {
    index: () => Api.get('/notes', {
        headers: {'x-access-token': localStorage.getItem('token') }
    }),
    create: () => Api.post('/notes',{'title': 'Nova nota', 'body': 'Conteúdo...'}, {headers:{'x-access-token': localStorage.getItem('token')} } ),
    delete: (id) => Api.delete(`/notes/${id}`, {
        headers: {'x-access-token': localStorage.getItem('token') }
      }),
    update: (id,params) => Api.put(`/notes/${id}`, params, {
        headers: {'x-access-token': localStorage.getItem('token') }
      }),
    search: (query) => Api.get(`/notes/search?q=${query}`, {
        headers: {'x-access-token': localStorage.getItem('token') }
      })
}

export default notesService;
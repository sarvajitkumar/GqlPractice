const {RESTDataSource}=require('apollo-datasource-rest')
class GoRestAPI extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = "https://gorest.co.in/public/v2";
    }
    getAllUsers() {
        return this.get('/users');
    }
    getAllPosts(){
        return this.get('/posts');
    }
    getAllComments() {
        return this.get('/comments');
    }
    getAllTodos() {
        return this.get('/todos');
    }
    getUser(id) {
        return this.get(`/users/${id}`);
    }
    getComment(id) {
        return this.get(`/comments/${id}`);
    }
    getPost(id) {
        return this.get(`/posts/${id}`);
    }
    getTodo(id) {
        return this.get(`/todos/${id}`);
    }
    getUserPosts(id) {
        return this.get(`/users/${id}/posts`);
    }
    getPostComments(id) {
        return this.get(`/posts/${id}/comments`);
    }
    getUserTodos(id) {
        return this.get(`/users/${id}/todos`);
    }
}

module.exports=GoRestAPI
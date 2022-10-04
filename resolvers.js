const resolvers = {
    Query: {
        getUser: (_, { id }, { dataSources }) => {
            return dataSources.GoRestAPI.getUser(id);
        },
        getPost: (_, { id }, { dataSources }) => {
            return dataSources.GoRestAPI.getPost(id);
        },
        getComment: (_, { id }, { dataSources }) => {
            return dataSources.GoRestAPI.getComment(id);
        },
        getTodo: (_, { id }, { dataSources }) => {
            return dataSources.GoRestAPI.getTodo(id);
        },
        getUserPosts: (_, { id }, { dataSources }) => {
            return dataSources.GoRestAPI.getUserPosts(id);
        },
        getUserTodos: (_, { id }, { dataSources }) => {
            return dataSources.GoRestAPI.getUserTodos(id);
        },
        getPostComments: (_, { id }, { dataSources }) => {
            return dataSources.GoRestAPI.getPostComments(id);
        },
        getAllUsers: (_, __, { dataSources }) => {
            return dataSources.GoRestAPI.getAllUsers();
        },
        getAllTodos: (_, __, { dataSources }) => {
            return dataSources.GoRestAPI.getAllTodos();
        },
        getAllComments: (_, __, { dataSources }) => {
            return dataSources.GoRestAPI.getAllComments();
        },
        getAllPosts: (_, __, { dataSources }) => {
            return dataSources.GoRestAPI.getAllPosts();
        },
    },
    User: {
        todos: ({ id }, _, { dataSources }) => {
            return dataSources.GoRestAPI.getUserTodos(id);
        },
        posts: ({ id }, _, { dataSources }) => {
            return dataSources.GoRestAPI.getUserPosts(id);
        },
    },
    Todo: {
        userId: ({ user_id }) => {
            return user_id;
        },
        dueOn: ({ due_on }) => {
            return due_on;
        },
    },
    Post: {
        userId: ({ user_id }) => {
            return user_id;
        },
        comments: ({ id }, _, { dataSources }) => {
            return dataSources.GoRestAPI.getPostComments(id);
        }
    },
    Comment: {
        postId: ({ post_id }) => {
            return post_id;
        },
    },
};

module.exports = resolvers
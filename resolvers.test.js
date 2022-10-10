import resolvers from "./resolvers";

const mockData = {
  user: {
    id: 1,
    email: "Hi I am email",
  },
  todo: {
    id: 2,
    subject: "Hi I am todo",
    user_id: 1,
    due_on: 1234,
  },
  comment: {
    id: 3,
    body: "Hi I am body",
    post_id: 4
  },
  post: {
    id: 4,
    body: "Hi I am body",
    user_id: 1,
  },
};
describe("Testing resolvers.Query", () => {
  it("testing Query.getUser", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getUser = jest.fn(() => mockData.user);
    const response = resolvers.Query.getUser({}, mockData.user, {
      dataSources,
    });
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getUser).toHaveBeenCalledTimes(1);
    expect(dataSources.GoRestAPI.getUser).toHaveBeenCalledWith(
      mockData.user.id
    );
    expect(response).toEqual(mockData.user);
  });
  it("testing Query.getPost", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getPost = jest.fn(() => mockData.post);
    const response = resolvers.Query.getPost({}, mockData.post, {
      dataSources,
    });
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getPost).toHaveBeenCalledTimes(1);
    expect(dataSources.GoRestAPI.getPost).toHaveBeenCalledWith(
      mockData.post.id
    );
    expect(response).toEqual(mockData.post);
  });
  it("testing Query.getComment", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getComment = jest.fn(() => mockData.comment);
    const response = resolvers.Query.getComment({}, mockData.comment, {
      dataSources,
    });
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getComment).toHaveBeenCalledTimes(1);
    expect(dataSources.GoRestAPI.getComment).toHaveBeenCalledWith(
      mockData.comment.id
    );
    expect(response).toEqual(mockData.comment);
  });
  it("testing Query.getTodo", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getTodo = jest.fn(() => mockData.todo);
    const response = resolvers.Query.getTodo({}, mockData.todo, {
      dataSources,
    });
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getTodo).toHaveBeenCalledTimes(1);
    expect(dataSources.GoRestAPI.getTodo).toHaveBeenCalledWith(
      mockData.todo.id
    );
    expect(response).toEqual(mockData.todo);
  });
  it("testing Query.getUserPosts", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getUserPosts = jest.fn(() => [mockData.post]);
    const response = resolvers.Query.getUserPosts({}, mockData.user, {
      dataSources,
    });
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getUserPosts).toHaveBeenCalledTimes(1);
    expect(dataSources.GoRestAPI.getUserPosts).toHaveBeenCalledWith(
      mockData.user.id
    );
    expect(response).toEqual([mockData.post]);
  });
  it("testing Query.getUserTodos", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getUserTodos = jest.fn(() => [mockData.todo]);
    const response = resolvers.Query.getUserTodos({}, mockData.user, {
      dataSources,
    });
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getUserTodos).toHaveBeenCalledTimes(1);
    expect(dataSources.GoRestAPI.getUserTodos).toHaveBeenCalledWith(
      mockData.user.id
    );
    expect(response).toEqual([mockData.todo]);
  });
  it("testing Query.getPostComments", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getPostComments = jest.fn(() => [mockData.comment]);
    const response = resolvers.Query.getPostComments({}, mockData.post, {
      dataSources,
    });
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getPostComments).toHaveBeenCalledTimes(1);
    expect(dataSources.GoRestAPI.getPostComments).toHaveBeenCalledWith(
      mockData.post.id
    );
    expect(response).toEqual([mockData.comment]);
  });
  it("testing Query.getAllUsers", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getAllUsers = jest.fn(() => [mockData.user]);
    const response = resolvers.Query.getAllUsers(
      {},
      {},
      {
        dataSources,
      }
    );
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getAllUsers).toHaveBeenCalledTimes(1);
    expect(response).toEqual([mockData.user]);
  });
  it("testing Query.getAllTodos", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getAllTodos = jest.fn(() => [mockData.todo]);
    const response = resolvers.Query.getAllTodos(
      {},
      {},
      {
        dataSources,
      }
    );
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getAllTodos).toHaveBeenCalledTimes(1);
    expect(response).toEqual([mockData.todo]);
  });
  it("testing Query.getAllComments", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getAllComments = jest.fn(() => [mockData.comment]);
    const response = resolvers.Query.getAllComments(
      {},
      {},
      {
        dataSources,
      }
    );
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getAllComments).toHaveBeenCalledTimes(1);
    expect(response).toEqual([mockData.comment]);
  });
  it("testing Query.getAllPosts", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getAllPosts = jest.fn(() => [mockData.post]);
    const response = resolvers.Query.getAllPosts(
      {},
      {},
      {
        dataSources,
      }
    );
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getAllPosts).toHaveBeenCalledTimes(1);

    expect(response).toEqual([mockData.post]);
  });
});

describe("Testing resolvers.User", () => {
  it("Testing User.todos", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getUserTodos = jest.fn(() => [mockData.todo])
    const response = resolvers.User.todos(mockData.user, {}, { dataSources });
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getUserTodos).toHaveBeenCalledTimes(1);
    expect(dataSources.GoRestAPI.getUserTodos).toHaveBeenCalledWith(
      mockData.user.id
    );
    expect(response).toEqual([mockData.todo]);
  })
  it("Testing User.posts", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getUserPosts = jest.fn(() => [mockData.post])
    const response = resolvers.User.posts(mockData.user, {}, { dataSources });
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getUserPosts).toHaveBeenCalledTimes(1);
    expect(dataSources.GoRestAPI.getUserPosts).toHaveBeenCalledWith(
      mockData.user.id
    );
    expect(response).toEqual([mockData.post]);
  })
});

describe("Testing resolvers.Todo", () => {

  it("Testing Todo.userId", () => {
    const response = resolvers.Todo.userId(mockData.todo);
    expect(response).toBeDefined();
    expect(response).toEqual(mockData.todo.user_id);
  })
  it("Testing Todo.dueOn", () => {
    const response = resolvers.Todo.dueOn(mockData.todo);
    expect(response).toBeDefined();
    expect(response).toEqual(mockData.todo.due_on);
  })
});

describe("Testing resolvers.Post", () => {

  it("Testing Post.userId", () => {
    const response = resolvers.Post.userId(mockData.post);
    expect(response).toBeDefined();
    expect(response).toEqual(mockData.post.user_id);
  })
  it("Testing Post.comments", () => {
    const dataSources = { GoRestAPI: {} };
    dataSources.GoRestAPI.getPostComments = jest.fn(() => [mockData.comment])
    const response = resolvers.Post.comments(mockData.post, {}, { dataSources });
    expect(response).toBeDefined();
    expect(dataSources.GoRestAPI.getPostComments).toHaveBeenCalledTimes(1);
    expect(dataSources.GoRestAPI.getPostComments).toHaveBeenCalledWith(mockData.post.id);
    expect(response).toEqual([mockData.comment]);
  })
});
describe("Testing resolvers.Comment", () => {

  it("Testing Comment.postId", () => {
    const response = resolvers.Comment.postId(mockData.comment);
    expect(response).toBeDefined();
    expect(response).toEqual(mockData.comment.post_id);
  })
});
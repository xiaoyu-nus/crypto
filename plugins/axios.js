import createRepository from "~/path/to/repository.js";

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios);

  const repositories = {
    posts: repositoryWithAxios("posts"),
    users: repositoryWithAxios("users"),
    //...
  };

  inject("repositories", repositories);
};

export interface IPOSTS {
  id?: string;
}
interface ISTATE {
  posts: IPOSTS;
}

export default {
  actions: {},
  mutations: {},
  state: {
    posts: [{ id: 'dkks' }, { id: 'dksdk' }],
  },
  getters: {
    allPosts(state: ISTATE): IPOSTS {
      return state.posts;
    },
  },
};

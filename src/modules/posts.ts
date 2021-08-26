export interface IPOSTS {
  id?: string;
}
interface ISTATE {
  posts: IPOSTS;
  activePayment: string;
}

export default {
  actions: {},
  mutations: {
    updatePayment(state: ISTATE, change: string): void {
      state.activePayment = change;
    },
  },
  state: {
    posts: [{ id: 'dkks' }, { id: 'dksdk' }],
    activePayment: 'usd',
  },
  getters: {
    allPosts(state: ISTATE): IPOSTS {
      return state.posts;
    },
    getVarientPayment(state: ISTATE): string {
      return state.activePayment;
    },
  },
};

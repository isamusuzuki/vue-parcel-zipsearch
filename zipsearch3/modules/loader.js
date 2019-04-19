export default {
    namespaced: true,
    state: {
        isActive: false,
    },
    mutations: {
        update(state, isActive) {
            state.isActive = isActive;
        },
    },
    actions: {
        on(context) {
            context.commit('update', true);
        },
        off(context) {
            context.commit('update', false);
        },
    },
};

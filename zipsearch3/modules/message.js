export default {
    namespaced: true,
    state: {
        errorShow: false,
        errorMessages: [],
        successShow: false,
        successMessages: [],
    },
    mutations: {
        errorUpdate(state, payload) {
            state.errorShow = payload.isShow;
            state.errorMessages = payload.messages;
        },
        successUpdate(state, payload) {
            state.successShow = payload.isShow;
            state.successMessages = payload.messages;
        },
    },
    actions: {
        error(context, payload) {
            context.commit('errorUpdate', {
                isShow: true,
                messages: payload.messages,
            });
            window.scroll(0, 0); //文書の左上にスクロール位置をリセット
        },
        errorClear(context) {
            context.commit('errorUpdate', { isShow: false, messages: [] });
        },
        success(context, payload) {
            context.commit('successUpdate', {
                isShow: true,
                messages: payload.messages,
            });
            window.scroll(0, 0); //文書の左上にスクロール位置をリセット
        },
        successClear(context) {
            context.commit('successUpdate', { isShow: false, messages: [] });
        },
        clear(context) {
            context.commit('errorUpdate', { isShow: false, messages: [] });
            context.commit('successUpdate', { isShow: false, messages: [] });
        },
    },
};

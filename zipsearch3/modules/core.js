import axios from 'axios';
import axiosJsonpAdapter from 'axios-jsonp';

export default {
    namespaced: true,
    state: {
        zipList: [],
    },
    mutations: {
        addList(state, payload) {
            state.zipList.unshift(payload);
        },
    },
    actions: {
        zipsearch(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://zipcloud.ibsnet.co.jp/api/search', {
                        adapter: axiosJsonpAdapter,
                        params: {
                            zipcode: payload.zipcode,
                        },
                    })
                    .then(response => {
                        if (response.data.results !== null) {
                            const r0 = response.data.results[0];
                            const address = `${r0.address1}${r0.address2}${
                                r0.address3
                            }`;
                            context.commit('addList', {
                                zipcode: payload.zipcode,
                                address,
                            });
                            resolve(address);
                        } else {
                            reject(
                                `${
                                    payload.zipcode
                                }は正しい郵便番号ではありません`
                            );
                        }
                    })
                    .catch(error => {
                        reject(JSON.stringify(error));
                    });
            });
        },
    },
};

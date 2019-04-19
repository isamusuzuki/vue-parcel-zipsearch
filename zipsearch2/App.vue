<template>
  <section class="section">
    <div class="container">
      <h1 class="title">郵便番号検索</h1>
      <div class="field">
        <label class="label">郵便番号（数字7桁）を入力し、Enterキーを押してください</label>
        <p class="control">
          <input
            class="input"
            type="text"
            placeholder="1234567"
            v-model="zipcode"
            v-on:keyup.enter="search"
            style="width: 200px;"
          >
        </p>
      </div>
      <div class="subtitle">{{ result }}</div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import Meta from 'vue-meta';
import axios from 'axios';
import axiosJsonpAdapter from 'axios-jsonp';

Vue.use(Meta);

export default {
    metaInfo: {
        title: '郵便番号検索',
        htmlAttrs: {
            lang: 'ja',
        },
        meta: [{ charset: 'utf-8' }],
    },
    data() {
        return {
            zipcode: '',
            result: '',
        };
    },
    methods: {
        search() {
            if (this.zipcode.match(/^\d{7}$/)) {
                axios
                    .get('http://zipcloud.ibsnet.co.jp/api/search', {
                        adapter: axiosJsonpAdapter,
                        params: {
                            zipcode: this.zipcode,
                        },
                    })
                    .then(response => {
                        if (response.data.results !== null) {
                            const r0 = response.data.results[0];
                            this.result = `${r0.address1}${r0.address2}${
                                r0.address3
                            }`;
                        } else {
                            this.result = `${
                                this.zipcode
                            }は正しい郵便番号ではありません`;
                        }
                    })
                    .catch(error => {
                        this.result = `エラー発生: ${error}`;
                    });
            } else {
                this.result = `${this.zipcode}は数字7桁ではありません`;
            }
        },
    },
};
</script>

<style>
@import '../node_modules/bulma/css/bulma.min.css';
</style>
<template>
  <div>
    <nav-menu></nav-menu>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <message-notice></message-notice>
          <core-part></core-part>
        </div>
      </div>
    </div>
    <loading-modal></loading-modal>
  </div>
</template>

<script>
import Vue from 'vue';
import Meta from 'vue-meta';
import Vuex from 'vuex';
import CorePart from './components/CorePart';
import LoadingModal from './components/LoadingModal';
import MessageNotice from './components/MessageNotice';
import NavMenu from './components/NavMenu';
import core from './modules/core';
import loader from './modules/loader';
import message from './modules/message';

Vue.use(Meta);
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        core,
        loader,
        message,
    },
});

export default {
    metaInfo: {
        title: '郵便番号検索',
        htmlAttrs: {
            lang: 'ja',
        },
        meta: [{ charset: 'utf-8' }],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
                integrity:
                    'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
                crossorigin: 'anonymous',
            },
        ],
    },
    store,
    components: {
        'core-part': CorePart,
        'loading-modal': LoadingModal,
        'message-notice': MessageNotice,
        'nav-menu': NavMenu,
    },
};
</script>

<style>
@import '../node_modules/bulma/css/bulma.min.css';

html,
body {
    height: 100%;
    background: #ecf0f3;
}
</style>

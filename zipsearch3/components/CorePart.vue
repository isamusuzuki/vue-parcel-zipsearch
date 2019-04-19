<template>
  <div>
    <div class="box">
      <div class="field">
        <label class="label">郵便番号（数字7桁）を入力し、Enterキーを押してください</label>
        <p class="control">
          <input
            class="input"
            type="text"
            placeholder="1234567"
            v-model="zipcode"
            v-on:keyup.enter="search"
          >
        </p>
      </div>
    </div>
    <div class="box">
      <div>
        <span class="icon">
          <i class="fa fa-history"></i>
        </span>
        検索履歴
      </div>
      <ul v-for="z in zipList" v-bind:key="z.zipcode">
        <li>{{z.zipcode}} => {{z.address}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            zipcode: '',
        };
    },
    computed: {
        zipList() {
            return this.$store.state.core.zipList;
        },
    },
    methods: {
        search() {
            this.$store.dispatch('message/clear');
            if (this.zipcode.match(/^\d{7}$/)) {
                this.$store.dispatch('loader/on');
                this.$store
                    .dispatch('core/zipsearch', { zipcode: this.zipcode })
                    .then(result => {
                        this.$store.dispatch('loader/off');
                        this.$store.dispatch('message/success', {
                            messages: [result],
                        });
                    })
                    .catch(error => {
                        this.$store.dispatch('loader/off');
                        this.$store.dispatch('message/error', {
                            messages: ['core/zipsearch エラー', error],
                        });
                    });
            } else {
                this.$store.dispatch('message/error', {
                    messages: [`${this.zipcode}は数字7桁ではありません`],
                });
            }
        },
    },
};
</script>

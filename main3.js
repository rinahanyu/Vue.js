// ****************************
// コンポーネント
// ****************************

// --------------------------------------------------------------------
// Vue.jsでのコンポーネント
// --------------------------------------------------------------------
// フロントエンドでは、UI(Webページ)を機能・役割ごとにまとめて、何度も使い回しができるようにしたもの。
// Vue.componentメソッドでコンポーネントを作成。第一引数にはコンポーネントの名前、第２引数には内容を渡す。
// このコンポーネントは、Vueの管理下（今回は #example：つまり <div id="example">...</div> の中）でカスタム要素として使用できる。

// Vue.component('button-preference', {
//   template: '<button>いいね！</button>',
// });

// new Vue({
//   el: '#example',
// });

// --------------------------------------------------------------------
// コンポーネントにデータを渡す
// --------------------------------------------------------------------
// dataオプションを使うには、dataを関数として定義しなければならない。

// Vue.component('button-preference', {
//   data() {
//     return { count: 0 };
//   },
//   methods: {
//     countUp() {
//       this.count += 1;
//     },
//   },
//   template: `
//     <button v-on:click="countUp">
//       {{ count }} いいね！
//     </button>
//   `,
// });

// new Vue({
//   el: '#example',
// });


// --------------------------------------------------------------------
// ルート要素
// --------------------------------------------------------------------
// ルート要素は一つでなければならないため、２つ以上ある場合はdivで一つにまとめる。

// Vue.component('buttons-preference', {
//   template: `
//   <div>
//     <button>いいね！</button>
//     <button>そだねー</button>
//   </div>
//   `,
// });

// new Vue({
//   el: '#example',
// });

// Vue.component('component-examples', {
//   template: `
//     <div>
//       <div v-for="example in examples">
//         {{ example }}
//       </div>
//     </div>
//   `,
// });


// --------------------------------------------------------------------
// グローバル登録
// --------------------------------------------------------------------
// Vue.componentメソッドで作成したコンポーネントは、別のコンポーネント内でも使用（呼び出し）できる。

// Vue.component('button-preference', {
//   template: `
//     <button>いいね！</button>
//   `,
// });

// Vue.component('button-empathy', {
//   template: `
//     <button>そだねー</button>
//   `,
// });

// Vue.component('buttons-sns', {
//   template: `
//     <div>
//       <button-preference></button-preference>
//       <button-empathy></button-empathy>
//     </div>
//   `,
// });

// new Vue({
//   el: '#example',
// });


// --------------------------------------------------------------------
// ローカル登録
// --------------------------------------------------------------------
// グローバル登録したコンポーネントの数が多くなるとコードが複雑でわかりにくくなるため、特定のコンポーネントないでしか使用しない場合は、ローカル登録する。

const buttonPreference = {
  template: `
    <button>いいね！</button>
  `,
};

const buttonEmpathy = {
  template: `
    <button>そだねー</button>
  `,
};

const buttonsSns = {
  components: {
    'button-preference': buttonPreference,
    'button-empathy': buttonEmpathy,
  },
  template: `
    <div>
      <button-preference></button-preference>
      <button-empathy></button-empathy>
    </div>
  `,
};

new Vue({
  el: '#example',
  components: {
    'buttons-sns': buttonsSns,
  },
});
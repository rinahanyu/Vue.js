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

// const buttonPreference = {
//   template: `
//     <button>いいね！</button>
//   `,
// };

// const buttonEmpathy = {
//   template: `
//     <button>そだねー</button>
//   `,
// };

// const buttonsSns = {
//   components: {
//     'button-preference': buttonPreference,
//     'button-empathy': buttonEmpathy,
//   },
//   template: `
//     <div>
//       <button-preference></button-preference>
//       <button-empathy></button-empathy>
//     </div>
//   `,
// };

// new Vue({
//   el: '#example',
//   components: {
//     'buttons-sns': buttonsSns,
//   },
// });



// --------------------------------------------------------------------
// 親からデータを渡す
// --------------------------------------------------------------------
// 関数における引数のように、vueインスタンス（親）からcomponent（子）へデータを渡すことができる
// propsは、jsでのpropertiesの略
// propsの値はhtmlから渡す
// propsの書き方は、jsファイルではキャメルケース、htmlファイルではケパブケースで記述すること

// const buttonPreference = {
//   props: ['initialCount'],
//   template: `
//     <button>
//       {{ initialCount }} いいね！
//     </button>
//   `,
// };

// new Vue({
//   el: '#example',
//   components: {
//     'button-preference': buttonPreference,
//   },
// });


// --------------------------------------------------------------------
// propsの検証
// --------------------------------------------------------------------
// 値を検証するためのルールを定義することもできる
// type は、propsの型を検証するルール、required:trueは、値が必須ということを指定するルール

// const buttonPreference = {
//   props: {
//     initialCount: {
//       type: Number,
//       required: true,
//     },
//   },
//   template: `
//     <button>
//       {{ initialCount }} いいね！
//     </button>
//   `,
// };

// new Vue({
//   el: '#example',
//   components: {
//     'button-preference': buttonPreference,
//   },
// });


// --------------------------------------------------------------------
// propsを子コンポーネント内で変更しない
// --------------------------------------------------------------------
// 通常propsは親（vueインスタンス）から子（component）のコンポーネントへ伝わるため、子の中でpropsの値を変更する処理は好ましくない→エラーとなる。
// 以下、悪い例

// const buttonPreference = {
//   props: ['initialCount'],
//   methods: {
//     countUp() {
//       this.initialCount += 1;
//     },
//   },
//   template: `
//     <button v-on:click="countUp">
//       {{ initialCount }} いいね！
//     </button>
//   `,
// };

// new Vue({
//   el: '#example',
//   components: {
//     'button-preference': buttonPreference,
//   },
// });

// propsを変更しないように、他の変数countで定義し直して、同じ動作を記述。props自体は0から変更していない。
// const buttonPreference = {
//   props: ['initialCount'],
//   data() {
//     return { count: this.initialCount };
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
// };

// new Vue({
//   el: '#example',
//   components: {
//     'button-preference': buttonPreference,
//   },
// });


// --------------------------------------------------------------------
// スロット
// --------------------------------------------------------------------
// slot要素は、コンポーネントの開始タグと終了タグの間に入れたコンテンツで置き換わるもの。slot要素を記述しないと、コンポーネントの間のテキストは表示されない。
// slot要素は、コンポーネント内にテキストがあれば置き換えられ、なければslot内にテキストがあればそれが表示される

// const buttonPreference = {
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
//       {{ count }} <slot>いいね！</slot>
//     </button>
//   `,
// };

// new Vue({
//   el: '#example',
//   components: {
//     'button-preference': buttonPreference,
//   },
// });


// --------------------------------------------------------------------
// プラグイン
// --------------------------------------------------------------------

new Vue({
  el: '#example',
  components: {
    carousel: VueCarousel.Carousel,
    slide: VueCarousel.Slide,
  },
});
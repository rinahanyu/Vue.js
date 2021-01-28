// --------------------------------------------------------
// Vue.jsについて
// --------------------------------------------------------
// インスタンスの作成

// const app = new Vue({
//   el: '#example',
//   data: {
//     greeting: 'Hello Vue.js!',
//   },
// });


// --------------------------------------------------------
// DOM要素の属性と、Vueインスタンスのデータをバインディング
// （Vue.jsで使用する特別な属性をディレクティブという。下記「v-bind」など）

// const app = new Vue({
//   el: '#example',
//   data: {
//     url: 'https://www.amazon.co.jp/',
//   },
// });

// const app = new Vue({
//   el: '#example',
//   data: {
//     name: '太郎',
//   },
// });


// --------------------------------------------------------
// リストを表示
// 1つのul要素の中にある複数のli要素（同じ親の中にいる複数の子要素）はkey属性の値を一意（ユニーク）とし、
// 例えばリストの並び順を更新する場合、このkey属性によってVueが識別して要素を並び替えることができる。

// const app = new Vue({
//   el: '#example',
//   data: {
//     members: ['桃太郎', 'イヌ', 'サル', 'キジ'],
//   },
// });

// プロパティの値を格納した変数 in オブジェクト
// (プロパティの値を格納した変数, プロパティ名を格納した変数) in オブジェクト
// →それぞれindex.htmlの記述方法を使い分け
// const app = new Vue({
//   el: '#example',
//   data: {
//     characters: {
//       hero: '桃太郎',
//       friend: 'イヌ',
//       enemy: '鬼',
//     },
//   },
// });


// --------------------------------------------------------
// イベント

// const app = new Vue({
//   el: '#example',
//   data: {
//     name: '太郎',
//   },
// });


// --------------------------------------------------------
// ディレクティブの省略記法

// v-bind:→:
// v-on:input= → @イベントのタイプ(input)=


// --------------------------------------------------------
// フォームへ入力
// input v-model="name"により、双方のバインディングが可能

// const app = new Vue({
//   el: '#example',
//   data: {
//     name: '太郎',
//   },
// });


// --------------------------------------------------------
// 算出プロパティ

// const app = new Vue({
//   el: '#example',
//   data: {
//     height: '',
//     weight: '',
//   },
//   computed: {
//     bmi() {
//       if (this.height && this.weight) {
//         // センチメートルをメートルに変換する
//         const meterHeight = this.height / 100;

//         // BMIを計算する
//         const bmi = this.weight / (meterHeight * meterHeight);

//         // 小数点以下の桁数を、２桁にして返す
//         return bmi.toFixed(2);
//       }

//       return '';
//     },
//   },
// });

// --------------------------------------------------------
// メソッド

// const app = new Vue({
//   el: '#example',
//   data: {
//     height: '',
//     weight: '',
//   },
//   methods: {
//     getBmi() {
//       if (this.height && this.weight) {
//         // センチメートルをメートルに変換する
//         const meterHeight = this.height / 100;

//         // BMIを計算する
//         const bmi = this.weight / (meterHeight * meterHeight);

//         // 小数点以下の桁数を、２桁にして返す
//         return bmi.toFixed(2);
//       }

//       return '';
//     },
//   },
// });


// --------------------------------------------------------
// 算出プロパティとメソッドの違い
// 参照しているVueインスタンスのデータが更新されたときだけ再計算される。
// 以下の算出プロパティdate()では、countを参照していないため、count数が変化しても再計算されない。

// const app = new Vue({
//   el: '#example',
//   data: {
//     count: 0,
//   },
//   computed: {
//     date() {
//       return new Date().toLocaleString();
//     },
//   },
//   methods: {
//     countUp() {
//       this.count += 1;
//     },
//     getDate() {
//       return new Date().toLocaleString();
//     },
//   },
// });


// --------------------------------------------------------
// タブの作成

// v-showの場合
new Vue({
  el: '#example',
  data: {
    activeTab: 'tabs-1',
  },
});
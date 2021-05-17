const app = new Vue({
    el: "#root",

    data: {
      message: 'Benvenuto',
      nome: prompt("inserisci il tuo Nome"),
      cognome: prompt("inserisci il tuo Cognome")
    }
})
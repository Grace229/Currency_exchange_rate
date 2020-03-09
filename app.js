new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      items: [],
      base:null

    };
  },
  created() {
    axios
      .get("https://api.exchangeratesapi.io/latest")
      .then(value => {
        this.items = value.data.rates;
        this.base = value.data;
        
      })
     
  }
});

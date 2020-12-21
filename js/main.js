const app = Vue.createApp({
  data() {
    return {
      title: "Vue Cocktails",
      search: "",
      drinks: [],
    };
  },
  created() {
    this.getCocktail();
  },
  methods: {
    async getCocktail() {
      const fetchData = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.search}`
      );
      const data = await fetchData.json();
      const drinksData = data.drinks;

      this.drinks = drinksData;
    },
    searchDrink() {
      this.getCocktail();
    },
  },
});

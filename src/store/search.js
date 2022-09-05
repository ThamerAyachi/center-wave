import axios from "axios";

const search = {
  state: () => ({}),

  actions: {
    searchMusic: async (t, data) => {
      try {
        const options = {
          method: "GET",
          url: "https://spotify23.p.rapidapi.com/search/",
          params: {
            q: data,
            type: "multi",
            offset: "0",
            limit: "10",
            numberOfTopResults: "5",
          },
          headers: {
            "X-RapidAPI-Key":
              "c876ef2714mshe5d52a32c229f64p1c923ajsnb585710c31f3",
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
          },
        };
        const res = await axios.request(options);
        return res;
      } catch (err) {
        return err;
      }
    },
  },
};

export default search;

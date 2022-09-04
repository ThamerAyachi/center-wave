import axios from "axios";

const search = {
  state: () => ({}),

  actions: {
    searchMusic: async (t, data) => {
      try {
        const res = await axios.get(
          "https://shazam.p.rapidapi.com/search",
          data
        );
        return res;
      } catch (err) {
        return err;
      }
    },
  },
};

export default search;

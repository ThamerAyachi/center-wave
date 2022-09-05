<template>
  <div>
    <div class="w-full text-center text-3xl font-semibold">New Post</div>
    <div class="flex justify-center">
      <div class="my-10 md:w-[700px] w-screen" style="max-width: 700px">
        <!-- search -->
        <form class="px-3 my-5 flex w-full" @submit.prevent="onSearch">
          <input
            type="text"
            class="p-2 bg-dark w-4/5 text-gray-400 rounded-l-xl focus:outline-none border-dark focus:border-primary focus:ring focus:ring-opacity-20 focus:ring-primary"
            placeholder="Search for tracks"
            v-model="search"
          />
          <button class="w-1/5 bg-dark text-primary rounded-r-xl">
            Search
          </button>
        </form>

        <!-- for data not found -->
        <div class="text-center w-full my-40 text-gray-500" v-if="!tracks[0]">
          <p class="uppercase font-semibold text-3xl">Track not found</p>
          <p class="mt-2">Search with track's title</p>
        </div>

        <div class="my-10">
          <!-- music searched here -->
          <img
            v-for="(t, i) in tracks"
            :key="i"
            :src="t.data.albumOfTrack.coverArt.sources[0].url"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      tracks: [],
    };
  },
  methods: {
    async onSearch() {
      try {
        const res = await this.$store.dispatch("searchMusic", this.search);
        this.tracks = res.data.tracks.items;
        // console.log("image", t.data.albumOfTrack.coverArt.sources[0].url);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

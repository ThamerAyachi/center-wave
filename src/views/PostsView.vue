<template>
  <div>
    <!-- title -->
    <h2
      class="w-full flex justify-center items-center space-x-3 text-3xl text-gray-300 font-bold mb-10"
    >
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8"
        >
          <path
            fill-rule="evenodd"
            d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span>Posts</span>
    </h2>

    <div class="grid md:grid-cols-3 grid-cols-1 gap-4">
      <!-- blog -->
      <router-link
        to="/blogs"
        class="rounded-md bg-dark shadow-md hover:scale-105 duration-500 transform"
        v-for="(b, i) in blogs"
        :key="i"
      >
        <div class="overflow-hidden">
          <img
            :src="b.img"
            class="object-cover w-full max-h-56 rounded-t-md"
            alt=""
          />
        </div>
        <div class="px-3 py-2 text-sm text-gray-400">{{ b.date }}</div>
        <div class="p-3 text-2xl text-gray-300 font-semibold">
          {{ b.title }}
        </div>
      </router-link>
    </div>

    <div class="w-full flex justify-center my-10">
      <button class="bg-dark rounded-full py-1 px-5 text-primary shadow">
        Load More
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wd-TtnQms_MhwwwzlSKXIF-M28qp7ZblXg&usqp=CAU",
          date: "2 sec ago",
          title: "Checklist: Grow Your Center Wave Profile Followers",
        },
        {
          img: "data:image/jpeg;base64,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",
          date: "2 sec ago",
          title: "Checklist: Grow Your Center Wave Profile Followers",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4ixKCLcxU7vYZmI56nYMqtfGT_YhbmKo_Q&usqp=CAU",
          date: "2 sec ago",
          title: "Checklist: Grow Your Center Wave Profile Followers",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <!-- title -->
    <h2
      class="w-full flex justify-center items-center space-x-3 text-3xl text-primary font-bold mb-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-8 h-8"
      >
        <path
          d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"
        />
        <path
          d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"
        />
      </svg>
      <span>Blogs</span>
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
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDADXQEeqkVsX5PRUxNZt5jWFWKWjCZJq2xQ&usqp=CAU",
          date: "2 sec ago",
          title: "Checklist: Grow Your Center Wave Profile Followers",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqks_LbsPXsIy1Z8XRqZS1mgWSsppD2jqzqQ&usqp=CAU",
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

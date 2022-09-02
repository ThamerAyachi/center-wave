<template>
  <div>
    <div class="w-full text-center text-3xl font-semibold">New Post</div>
    <div class="flex justify-center">
      <div class="my-10 md:w-[700px] w-screen" style="max-width: 700px">
        <!-- search -->
        <form class="px-3 my-5 flex w-full">
          <input
            type="search"
            class="p-2 bg-dark w-4/5 text-primary rounded-l-xl focus:outline-none border-dark focus:border-primary focus:ring focus:ring-opacity-20 focus:ring-primary"
            placeholder="Search for tracks"
          />
          <button class="w-1/5 bg-dark text-primary rounded-r-xl">
            Search
          </button>
        </form>

        <!-- for data not found -->
        <div class="text-center w-full my-40 text-gray-500">
          <p class="uppercase font-semibold text-3xl">Track not found</p>
          <p class="mt-2">Search with track's title</p>
        </div>

        <div class="my-10">
          <!-- music searched here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

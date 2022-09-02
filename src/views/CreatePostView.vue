<template>
  <div>
    <div class="w-full text-center text-3xl font-semibold">New Post</div>
    <div class="flex justify-center">
      <div class="my-10" style="max-width: 700px">
        <!-- search -->
        <form class="px-3 my-5 flex w-full">
          <input
            type="search"
            class="p-2 bg-dark w-4/5 text-primary rounded-l-xl focus:outline-none border-dark focus:border-primary focus:ring focus:ring-opacity-20 focus:ring-primary"
          />
          <button class="w-1/5 bg-dark text-primary rounded-r-xl">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

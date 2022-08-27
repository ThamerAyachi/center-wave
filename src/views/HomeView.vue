<template>
  <div>
    <div
      class="h-screen bg-gradient-to-l from-primary to-indigo-400 overflow-y-visible relative"
    >
      <!-- background -->
      <img
        src="/img/girl.jpg"
        class="object-cover h-screen md:w-screen opacity-30 absolute top-0"
        alt=""
      />
      <!-- bubbles -->
      <ul
        class="bubbles w-full flex items-center justify-around absolute bottom-0"
      >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="w-full h-screen text-white absolute top-0">
        <!-- navbar -->
        <nav class="flex justify-between px-5 md:px-10 my-5">
          <div class="text-xl logo">Center Wave</div>
          <div>
            <button
              class="border border-white px-4 py-1 font-semibold hover:bg-white duration-150 transform hover:text-black"
            >
              Login
            </button>
          </div>
        </nav>

        <div class="h-3/5 py-10 flex items-center justify-center mt-20">
          <div>
            <h1
              class="md:text-5xl text-3xl font-semibold w-full flex justify-center"
            >
              Discover the World's Sounds
            </h1>

            <p class="w-full flex justify-center my-5 text-xl text-center">
              share your music by combining blockchain technology <br />
              with an easy to use interface.
            </p>

            <div class="flex justify-center my-10">
              <button
                class="border-b p-1 text-lg border-dashed hover:border-solid"
              >
                Explore
              </button>
            </div>

            <div>
              <div class="flex rounded-full overflow-hidden mx-8">
                <input
                  type="text"
                  class="w-full h-full p-2 px-3 text-gray-700 rounded-l-full"
                  placeholder="Search for artists, tracks"
                />
                <button class="bg-white text-primary px-5 font-semibold">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="z-20 w-full">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 3510.8 349.9"
            class="myShadow"
          >
            <path
              class="st0"
              d="M1538.6,349.9c-8.5-5.8-17-11.5-25.4-17.2c-201.1-134-443.1-203.1-683.1-195.3
	c-227.5,7.5-446.5,85.8-635.3,212.4H1538.6z"
            />
            <path
              class="st1"
              d="M3510.8,204.2c-20.4-11.2-41.6-21.2-62.2-29.5c-82.7-33.3-189.3-48.1-283.7-29.4
	c-145.5,29-226.9,126.3-365.6,165.7c-122,34.6-266.8,18.4-392.2-11.3c-243.9-57.8-476.4-125.1-746.4-111c-148,7.7-291,38.8-421.4,82
	c-134.5,44.6-293.8,106.7-448.7,58.3c-131.8-41.3-200.4-132.1-322.4-182c-91.2-37.3-207.8-50.7-315.1-36.3
	C98,118.1,45.7,132.9,0,153.3v197.2h3510.8V204.2z"
            />
            <path
              class="st0"
              d="M3510.8,282.8c-117.5-97.4-255.6-201.2-413.4-176.4c-111.4,17.5-184.7,114-282.7,161
	c-127.3,61-227.1-16.9-341-69.3c-153.7-70.6-343.6-51.4-480.7,48.6c-42.4,31-83,70-125.2,103.2h1643V282.8z"
            />
            <path
              class="st0"
              d="M3510.8,161.9c-21.6-2.7-43-3.1-62.3-1.6c-73,5.5-142.2,33.4-209.5,62.3c-67.3,28.9-134.9,59.4-207.2,70.9
	c-241.2,38.3-440.7-133.6-663.5-189c-201.9-50.2-415.8-6.8-611.8,62.6c-199.5,70.6-405.5,169.7-612.9,127.5
	c-146-29.7-268.2-125.9-403.1-189.1C501.4-6.7,247.5-4.2,0,50.1v299.8h3510.8V161.9z"
            />
          </svg>
          <div
            class="grid md:grid-cols-2 grid-cols-1 bg-dark m-0 overflow-hidden"
          >
            <!-- section 1 -->
            <div class="flex justify-center my-24 mx-5"><MusicGirlSvg /></div>
            <div class="flex justify-center items-center">
              <div class="mx-5 max-w-sm">
                <div class="text-gray-300 text-3xl font-light my-5">
                  Share Music Everywhere, Anytime
                </div>
                <div class="text-gray-400">
                  Share your favorite music anytime, everywhere on any device.
                </div>
              </div>
            </div>

            <!-- section 2 -->
            <div class="md:flex justify-center items-center hidden">
              <div class="mx-5 max-w-sm">
                <div class="text-gray-300 text-3xl font-light my-5">
                  Create Playlists with any audio
                </div>
                <div class="text-gray-400">
                  Create and share playlists with your favorite music, songs and
                  podcasts.
                </div>
              </div>
            </div>
            <div class="flex justify-center mx-5">
              <PlayListSvg />
            </div>
            <!-- for mobile -->
            <div class="md:hidden flex justify-center items-center mb-16">
              <div class="mx-5 max-w-sm">
                <div class="text-gray-300 text-3xl font-light my-5">
                  Create Playlists with any audio
                </div>
                <div class="text-gray-400">
                  Create and share playlists with your favorite music, songs and
                  podcasts.
                </div>
              </div>
            </div>
          </div>
          <!-- contact -->
          <div class="bg-darked p-3" id="contact">
            <div class="w-full text-center text-primary text-3xl my-10">
              Contact Us
              <div class="text-sm text-gray-400">Let us help you.</div>
            </div>

            <form class="grid grid-cols-1 md:grid-cols-2">
              <div class="space-y-5 md:mx-5">
                <div>
                  <input
                    class="bg-dark border border-dark my-2 text-sm rounded-lg focus:ring-primary focus:border-primary focus:outline-none block w-full p-2.5"
                    type="text"
                    autocomplete="off"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <input
                    class="bg-dark border border-dark my-2 text-sm rounded-lg focus:ring-primary focus:border-primary focus:outline-none block w-full p-2.5"
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div class="md:mx-5">
                <div>
                  <textarea
                    class="bg-dark border border-dark my-2 text-sm rounded-lg focus:ring-primary focus:border-primary focus:outline-none block w-full p-2.5"
                    maxlength="400"
                    rows="4"
                    placeholder="Write here your message"
                    required
                  ></textarea>
                </div>
              </div>
              <div></div>
              <div class="my-5 md:mx-5 flex justify-end">
                <button class="bg-primary w-full md:w-32 p-3 rounded-md">
                  Send
                </button>
              </div>
            </form>
          </div>

          <!-- section with image background -->
          <div class="bg-primary overflow-hidden h-80 relative">
            <div class="absolute z-10 flex items-center h-full max-w-md mx-20">
              <div>
                <h2 class="text-4xl mb-3">Calling all creators</h2>
                <p class="my-5 font-semibold">
                  Get on Center Wave to connect with fans, share your sounds,
                  and grow your audience.
                </p>
                <div class="flex items-center space-x-3 text-xl my-3">
                  <span
                    class="border rounded-full p-2 hover:bg-white hover:text-primary duration-300 transform"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                      />
                    </svg>
                  </span>
                  <p>Upload Songs</p>
                </div>
                <div class="flex items-center space-x-3 text-xl my-3">
                  <span
                    class="border rounded-full p-2 hover:bg-white hover:text-primary duration-300 transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                      />
                    </svg>
                  </span>
                  <p>Check Stats</p>
                </div>
              </div>
            </div>
            <img
              src="/img/creator.jpg"
              class="object-cover h-full w-full opacity-30 absolute top-0"
              alt=""
            />
          </div>

          <!-- are you ready section -->
          <div
            class="bg-dark h-72 flex justify-center items-center text-gray-300"
          >
            <div class="mx-5 text-center">
              <h2 class="text-4xl">Are you ready to rock the world?</h2>
              <div class="mt-8 flex justify-center space-x-5 items-center">
                <p class="uppercase text-lg">or</p>
                <button
                  class="text-lg border text-primary rounded border-primary px-6 py-1 font-semibold hover:bg-primary duration-150 transform hover:text-white"
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          <!-- footer -->
          <footer
            class="bg-dark border-t border-gray-700 space-y-5 md:space-y-0 text-center md:flex md:justify-between p-5 text-gray-400 text-sm"
          >
            <div class="text-gray-300 text-base">
              Copyright © {{ new Date().getFullYear() }} Center Wave.
            </div>
            <ul class="flex space-x-5 justify-center">
              <li class="hover:text-gray-200 duration-150 transform">
                <router-link :to="{ name: 'Blogs' }">Blogs</router-link>
              </li>
              <li class="hover:text-gray-200 duration-150 transform">
                <router-link :to="{ name: 'About' }">About us</router-link>
              </li>
              <li class="hover:text-gray-200 duration-150 transform">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicGirlSvg from "../components/svg/MusicGirl.svg.vue";
import PlayListSvg from "../components/svg/PlayList.vue";

export default {
  components: {
    MusicGirlSvg,
    PlayListSvg,
  },
};
</script>
<style>
.st0 {
  opacity: 0.35;
  fill: #222225;
}
.st1 {
  fill: #222225;
}
</style>

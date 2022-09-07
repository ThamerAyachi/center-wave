<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <header
      class="flex items-center justify-between px-6 py-4 bg-dark border border-darked"
    >
      <div class="flex items-center">
        <button
          @click="isOpen = true"
          class="text-gray-500 focus:outline-none lg:hidden"
        >
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div class="relative mx-4 lg:mx-0">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <input
            class="w-32 pl-10 bg-darked p-2 text-primary border-darked rounded-md sm:w-64 focus:border-primary focus:ring focus:ring-opacity-40 focus:ring-primary"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div class="flex items-center">
        <div class="relative" v-if="isLogin">
          <button
            @click="dropdownOpen = !dropdownOpen"
            class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
          >
            <img
              class="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
              alt="Your avatar"
            />
          </button>

          <div
            v-show="dropdownOpen"
            @click="dropdownOpen = false"
            class="fixed inset-0 z-10 w-full h-full"
          ></div>

          <transition
            enter-active-class="transition duration-150 ease-out transform"
            enter-from-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in transform"
            leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0"
          >
            <div
              v-show="dropdownOpen"
              class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >Products</a
              >
              <router-link
                to="/"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >Log out</router-link
              >
            </div>
          </transition>
        </div>
        <div v-else>
          <button class="text-gray-400 text-lg font-semibold">Login</button>
        </div>
      </div>
    </header>
    <!-- model -->
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div>
        <div
          :class="`modal ${
            !open && 'opacity-0 pointer-events-none'
          } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
        >
          <div
            @click="open = false"
            class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
          ></div>

          <div
            class="z-50 w-11/12 md:w-96 mx-auto overflow-y-auto bg-darked rounded shadow-lg modal-container md:max-w-3xl"
          >
            <div
              class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-gray-400 cursor-pointer modal-close"
            >
              <svg
                class="text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
              <span class="text-sm">(Esc)</span>
            </div>

            <!-- Add margin if you want to see some of the overlay behind the modal-->
            <div class="px-6 py-4 text-left modal-content">
              <!--Title-->
              <div class="flex items-center justify-between pb-3">
                <p
                  class="text-2xl font-medium text-gray-300 w-full text-center"
                >
                  Sign In
                </p>
                <div
                  class="z-50 cursor-pointer modal-close"
                  @click="open = false"
                >
                  <svg
                    class="text-gray-300 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    />
                  </svg>
                </div>
              </div>

              <!--Body-->
              <div class="mt-6">
                <div class="text-gray-300 text-sm">
                  <form>
                    <input
                      type="email"
                      class="bg-dark border border-dark my-2 text-sm rounded-lg focus:ring-primary focus:border-primary focus:outline-none block w-full p-2.5"
                      placeholder="Email address"
                      v-model="formData.email"
                    />
                    <input
                      type="password"
                      class="bg-dark border border-dark my-2 text-sm rounded-lg focus:ring-primary focus:border-primary focus:outline-none block w-full p-2.5"
                      placeholder="Password"
                      v-model="formData.password"
                    />

                    <div class="flex justify-end">
                      <button
                        class="bg-primary p-2 rounded text-gray-300 font-semibold my-3 px-8 hover:bg-purple-600"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSidebar } from "../../hooks/useSidebar";

export default {
  data() {
    return {
      isLogin: this.$store.state.token ? true : false,
      open: true,
      formData: {
        email: "",
        password: "",
      },
    };
  },

  setup() {
    const dropdownOpen = ref(false);
    const { isOpen } = useSidebar();

    return { dropdownOpen, isOpen };
  },
};
</script>

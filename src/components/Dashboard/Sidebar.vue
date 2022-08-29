<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-dark lg:translate-x-0 lg:static lg:inset-0"
    >
      <!-- logo -->
      <router-link
        :to="{ name: 'home' }"
        class="flex items-center justify-center mt-8"
      >
        <div class="flex items-center">
          <svg
            width="35"
            height="35"
            viewBox="0 0 2 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.36004 0.0799561C1.34741 0.0799392 1.33527 0.0858986 1.32762 0.0965186C1.31738 0.110679 1.31757 0.129862 1.32801 0.143862C1.32801 0.143862 1.44004 0.296396 1.44004 0.479956C1.44004 0.711676 1.25757 0.796751 1.06441 0.886831C0.895134 0.965751 0.720039 1.0474 0.720039 1.23996C0.720039 1.3586 0.796759 1.35996 0.800039 1.35996C0.815159 1.35996 0.829098 1.35129 0.835898 1.33777C0.838138 1.33333 0.881753 1.24987 0.985273 1.21511L1.00051 1.11402C1.00383 1.09222 1.02422 1.0771 1.04598 1.08042C1.06786 1.0837 1.08293 1.10401 1.07965 1.12589L1.0684 1.2005C1.07232 1.20034 1.076 1.19996 1.08004 1.19996C1.23236 1.19996 1.24004 1.34634 1.24004 1.37566C1.24004 1.4551 1.17694 1.56849 1.0091 1.59441L1.00168 1.64355L0.965664 1.91917C0.977064 1.91949 0.988399 1.91996 1.00004 1.91996C1.42664 1.91996 1.88004 1.62339 1.88004 1.07371C1.88004 0.820626 1.81794 0.74206 1.8109 0.73394C1.8007 0.72226 1.78464 0.717511 1.7698 0.721831C1.75488 0.726071 1.74373 0.738542 1.74121 0.753862C1.74121 0.753862 1.71952 0.879956 1.64004 0.879956C1.621 0.879956 1.61556 0.873497 1.61324 0.870737C1.58592 0.838297 1.60556 0.725405 1.61988 0.642925C1.63024 0.583325 1.64004 0.527076 1.64004 0.479956C1.64004 0.174676 1.37538 0.0829073 1.3727 0.0819873C1.36852 0.0805973 1.36425 0.0799617 1.36004 0.0799561ZM0.961992 0.200034C0.958618 0.199865 0.955236 0.200125 0.951836 0.200815C0.938276 0.203655 0.927181 0.213284 0.922461 0.226284C0.883381 0.333564 0.740199 0.639956 0.600039 0.639956C0.549479 0.639956 0.536817 0.620264 0.532617 0.613784C0.504417 0.569864 0.532207 0.469595 0.556367 0.416675C0.563047 0.402075 0.56041 0.384883 0.54957 0.373003C0.53873 0.361203 0.521958 0.356862 0.506758 0.362222C0.490958 0.367782 0.120117 0.504673 0.120117 1.04675C0.120117 1.45111 0.382582 1.85986 0.885742 1.91378L0.922461 1.63238L0.927383 1.59964C0.743223 1.59652 0.560039 1.48512 0.560039 1.23996C0.560039 1.00756 0.762633 0.907461 0.958633 0.810581C1.13627 0.722741 1.32004 0.631876 1.32004 0.439956C1.32004 0.352796 1.29784 0.321195 1.28832 0.311675C1.27688 0.300235 1.25973 0.296883 1.24473 0.303003C1.22977 0.309203 1.22004 0.323796 1.22004 0.339956C1.22004 0.428716 1.13754 0.490494 1.07098 0.525894C1.1041 0.383814 1.03751 0.263218 0.988945 0.212378C0.981775 0.204878 0.972115 0.200542 0.961992 0.200034Z"
              fill="#8A2BE2"
            />
          </svg>
          <span class="mx-2 text-2xl font-semibold text-white logo"
            >Center Wave</span
          >
        </div>
      </router-link>

      <nav class="mt-10 text-gray-400">
        <!-- links -->

        <!-- information -->
        <h5 class="px-6 py-2 uppercase text-gray-500 font-semibold">
          Information
        </h5>
        <router-link
          v-for="(link, i) in information"
          :key="i"
          active-class="bg-white text-gray-800"
          class="flex items-center px-6 py-2 mt-2 duration-200 hover:bg-white hover:text-gray-800 rounded-l-2xl"
          :to="{ name: link.name }"
        >
          <span v-html="link.icon"></span>

          <span class="mx-4">{{ link.text }}</span>
        </router-link>

        <div class="border-t border-gray-700 mx-2 mt-10">
          <div class="mx-2 text-gray-500 text-sm my-1 text-center">
            Copyright © {{ new Date().getFullYear() }} Center Wave.
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { useSidebar } from "../../hooks/useSidebar";
import icons from "../../assets/icons";

export default {
  data() {
    return {
      information: [
        { icon: icons.userGroup, name: "About", text: "About Us" },
        { icon: icons.blog, name: "Blogs", text: "Blogs" },
      ],
    };
  },

  setup() {
    const { isOpen } = useSidebar();

    return { isOpen };
  },
};
</script>

<template>
  <div v-if="winners.length" class="flex flex-col px-10 py-10 w-full">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">MetaWin Winners</h1>
    <Table :paginator="paginator" :winners="winners" />
  </div>
  <div class="flex justify-center items-center min-h-screen" v-else>
    <Spinner />
  </div>
</template>

<script>
const API_URL = "https://api.dev.platform.metawin.com/sweepstake/winner";
export default {
  name: "IndexPage",
  data() {
    return {
      winners: [],
      paginator: {
        loading: false,
        count: 30,
      },
    };
  },
  async mounted() {
    await this.fetchWinners(true);
    this.$nextTick(() =>
      document.addEventListener("scroll", () => this.handleScroll())
    );
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll());
  },
  methods: {
    async fetchWinners(initial = false) {
      try {
        if (this.paginator.count >= 50) return;
        if (!initial) {
          this.paginator.loading = true;
          this.paginator.count += 5;
        }
        // 3 second timer to demonstrate infinite loading
        setTimeout(async () => {
          this.winners = await $fetch(
            `${API_URL}?take=${this.paginator.count}`
          );
          this.paginator.loading = false;
        }, 3000);
      } catch (e) {
        console.log("Error fetching winners:", e);
      }
    },
    handleScroll() {
      const table = document.getElementById("table").getBoundingClientRect();
      if (table.bottom + 40 < window.innerHeight && !this.paginator.loading) {
        this.fetchWinners();
      }
    },
  },
};
</script>
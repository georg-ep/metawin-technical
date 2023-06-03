<template>
  <div>
    <table id="table" class="table-fixed w-full">
      <thead>
        <tr class="text-left">
          <th
            class="sm:text-[14px] py-2 font-extrabold"
            v-for="(heading, index) in headings"
            :key="`heading_${index}`"
          >
            {{ heading }}
          </th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          v-for="(winner, index) in winners"
          :key="`winner_${index}`"
          :data="winner"
        />
      </tbody>
    </table>
    <div class="w-full flex justify-between items-center py-3 sm:text-[10px]">
      <div />
      <Spinner v-if="paginator.loading" />
      <div>{{ count }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      headings: ["User", "Prize", "Prize Type"],
      maxEntries: 50,
    };
  },
  props: {
    paginator: {
      type: Object,
      required: true,
    },
    winners: {
      type: Array,
      required: true,
    },
  },
  computed: {
    count() {
      return `${this.winners.length} / ${this.maxEntries}`;
    },
  },
};
</script>
<template>
  <tr class="border-y-2 border-slate-700 sm:text-[10px]">
    <td class="flex items-center py-2 text-ellipsis overflow-hidden w-10/12">
      <img class="h-12 w-12 rounded mr-4 sm:mr-2 sm:h-4 sm:w-4" :src="data.avatarUrl" alt="" />
      <div>{{ data.displayName }}</div>
    </td>
    <td>
      <div>
        <div class="flex">
          <img
            v-if="isTokenType('NFT')"
            class="h-6 w-6 rounded-md mr-4 sm:mr-2 sm:h-3 sm:w-3"
            :src="data.prize.imageUrl"
            alt=""
          />
          <div class="flex items-center text-ellipsis overflow-hidden whitespace-nowrap w-8/12">
            <div v-if="isTokenType('StakedToken')" class="flex items-center">
              <img class="pr-4 h-10 w-10 sm:pr-2 sm:h-5 sm:w-5" src="~/assets/images/token.svg" />
              <div class="pr-1">{{ data.prize.amount }}</div>
            </div>
            <div>
              {{ data.prize.name }}
            </div>
          </div>
        </div>
        <div v-if="isTokenType('StakedCash')" class="flex">
          <img class="h-6 w-6 mr-4 sm:mr-2 sm:h-3 sm:w-3" src="~/assets/images/ethereum.svg" alt="" />
          <div>
            {{ data.prize.amount }}
          </div>
        </div>
      </div>
    </td>
    <td>
      {{ data.prize.type }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isTokenType() {
      return (type) => this.data.prize.type === type;
    },
  },
};
</script>
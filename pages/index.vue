<template>
  <div>
    <Container title="Wallets" :subtitle="'$ ' + getTotalBalance">
      <TableCard>
        <WalletTable
          :wallets="wallets"
          @add-wallet="(name) => onAddWallet(name)"
        />
      </TableCard>
    </Container>
  </div>
</template>

<script setup>
import Container from "~/components/Container.vue";
import TableCard from "~/components/TableCard.vue";
import WalletTable from "~/components/wallet/WalletTable.vue";

import { ref, nextTick } from "vue";

// const { data: data } = await useAPIFetch("/api/wallets/", {
//   onRequestError({ request, options, error }) {
//     console.log("request error", error);
//   },
// });

// get all wallets
const wallets = ref([]);
getWallets();

const getTotalBalance = computed(() => {
  console.log("called get total");
  if (wallets.value.length > 0) {
    console.log("data retrieved");
    let total = 0;
    wallets.value.forEach((x) => (total += x.attributes.totalBalance));
    return total.toFixed(2);
  } else {
    return "0";
  }
});

async function getWallets() {
  try {
    const { data: data } = await useAPIFetch("/api/wallets/");
    if (data && data.value) {
      wallets.value = data.value.data;
    }
  } catch (error) {
    console.log("Get Error:", error);
  }
}

async function onAddWallet(name) {
  try {
    const { data: data } = await useAPIFetch("/api/wallets/", {
      method: "POST",
      body: {
        data: {
          walletName: name,
          totalBalance: 0,
          slug: toKebabCase(name),
        },
      },
    });
    if (data) {
      getWallets();
    }
  } catch (error) {
    console.log("Post Error:", error);
  }
}

function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}
</script>

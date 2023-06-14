<template>
  <div>
    <Container title="Wallets" subtitle="$0.00">
      <TableCard>
        <WalletTable :wallets="wallets" />
      </TableCard>
    </Container>
  </div>
</template>

<script setup>
import Container from "~/components/Container.vue";
import TableCard from "~/components/TableCard.vue";
import WalletTable from "~/components/wallet/WalletTable.vue";

// const { data: data } = await useAPIFetch("/api/wallets/", {
//   onRequestError({ request, options, error }) {
//     console.log("request error", error);
//   },
// });

// get all wallets
const { data: data } = await useAPIFetch("/api/wallets/");
let wallets;
if (data && data.value) {
  wallets = data.value.data;
}
</script>

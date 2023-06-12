<template>
  <div>
    <Container title="Wallets" subtitle="$0.00">
      <TableCard>
        <WalletTable />
      </TableCard>
    </Container>
  </div>
</template>

<script>
import Container from "~/components/Container.vue";
import TableCard from "~/components/TableCard.vue";
import WalletTable from "~/components/wallet/WalletTable.vue";
export default {};
</script>

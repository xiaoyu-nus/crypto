<template lang="">
  <Modal
    v-show="showAddWallet"
    title="Add wallet"
    :canProceed="canProceed"
    @confirmed="onConfirm"
    @canceled="onCancel"
  >
    <p class="text-sm text-gray-500">Give a name to your new wallet!</p>
    <div class="mx-4 pt-4">
      <input
        v-model="newName"
        type="text"
        ref="nameInput"
        id="table-search"
        maxlength="20"
        :class="
          !canProceed && isDirty
            ? 'ring-red-500 border-red-500 focus:ring-red-500 hover:ring-red-500 hover:border-red-500  focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500'
            : 'focus:ring-blue-500 hover:ring-blue-500 hover:border-blue-500  focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500'
        "
        class="block p-2 pl-4 w-full placeholder:font-medium transition ease-in-out border hover:outline-none focus:outline-none focus:bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border-transparent hover:bg-white placeholder:text-sm text-sm text-gray-900 rounded-md w-80 bg-gray-100"
        placeholder="My wallet"
      />
      <p v-show="isNameTaken && isDirty" class="text-red-500 text-sm text-left">
        This name is taken. Please use a distinct name.
      </p>
      <p
        v-show="isDirty && newName.length == 0"
        class="text-red-500 text-sm text-left"
      >
        Name is required.
      </p>
    </div>
  </Modal>
  <div>
    <div class="relative overflow-x-auto sm:rounded-lg">
      <div class="justify-between items-center flex flex-wrap">
        <!-- search box -->
        <div class="pb-4 bg-white dark:bg-gray-900">
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative mt-1">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              v-model="searchKeyword"
              type="text"
              id="table-search"
              class="block p-2 pl-10 placeholder:font-medium transition ease-in-out border focus:bg-white border-transparent hover:bg-white placeholder:text-sm text-sm text-gray-900 rounded-md w-80 bg-gray-100 focus:ring-blue-500 hover:ring-blue-500 hover:outline-none hover:border-blue-500 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search wallet"
            />
          </div>
        </div>
        <button
          type="button"
          @click="addWallet"
          class="text-white bg-blue-500 hover:bg-blue-400 rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
        >
          Add new wallet
        </button>
      </div>
      <table
        class="w-full text-sm text-left text-gray-700 dark:text-gray-400 border-b"
      >
        <thead
          class="text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400 border-b border-t"
        >
          <tr>
            <th scope="col" class="px-6 py-3 font-normal">Wallet Name</th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center font-normal">
                Total Balance
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 h-3 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                    />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <div v-if="wallets && wallets.length <= 0"></div>
          <tr
            v-else
            v-for="(wallet, index) in formattedWallets"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700 cursor-pointer"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ wallet.walletName }}
            </th>
            <td class="px-6 py-4 font-medium">$ {{ wallet.totalBalance }}</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import Modal from "~/components/Modal.vue";
import { ref, nextTick } from "vue";
const props = defineProps({
  wallets: {
    type: Array,
    default: [],
    required: false,
  },
});

const newName = ref("");
const showAddWallet = ref(false);
const nameInput = ref();
const isDirty = ref(false);
const isNameTaken = ref(false);
const searchKeyword = ref("");

const emit = defineEmits(["addWallet"]);

const formattedWallets = computed(() => {
  return props.wallets
    .filter((w) => w.attributes.walletName.includes(searchKeyword.value))
    .map((w) => {
      return {
        walletName: w.attributes.walletName,
        totalBalance: w.attributes.totalBalance.toFixed(2),
      };
    });
});

const canProceed = computed(() => {
  if (newName.value.length !== 0) {
    isDirty.value = true;
  }
  isNameTaken.value =
    props.wallets.filter((w) => w.attributes.walletName == newName.value)
      .length !== 0;
  return newName.value.length > 0 && !isNameTaken.value;
});

function addWallet() {
  showAddWallet.value = true;
  nextTick(() => nameInput.value.focus());
}

function onConfirm() {
  showAddWallet.value = false;
  emit("addWallet", newName.value);
  isDirty.value = false;
  newName.value = "";
  isNameTaken.value = false;
}

function onCancel() {
  showAddWallet.value = false;
  isDirty.value = false;
  newName.value = "";
  isNameTaken.value = false;
}
</script>
<style lang=""></style>

<template>
  <q-page>
    <div class="q-pa-md">
    <q-list
      bordered
      separator
    >
      <q-item
        v-for="entry in entries"
        :key="entry.id"
      >
        <q-item-section>
          {{ entry.name }}
        </q-item-section>

        <q-item-section side>
          {{ currencify(entry.amount) }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  </q-page>
</template>

<script setup>

/*
  Imports
*/

import { ref } from 'vue'


/*
  Entries
*/

const entries = ref([
  {
    id: 'id1',
    name: 'Cuenta',
    amount: 6900.00
  },
  {
    id: 'id2',
    name: 'Telefono',
    amount: -625.05
  },
  {
    id: 'id3',
    name: 'Gastos',
    amount: -1200.00
  },
  {
    id: 'id4',
    name: 'Otros',
    amount: -4900.00
  },
])


/*
  Currencify
*/

function currencify(amount) {
   // Format: "+ $ 4,999.99" "- $ 999.00"

let posNegSymbol = ''
if (amount > 0) posNegSymbol = '+'
else if (amount < 0) posNegSymbol = '-'

const currencifySymbol = '$',
      amountPositive = Math.abs(amount),
      amountFormatted = amountPositive.toLocaleString('esp-MX', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })

   return `${ posNegSymbol } ${ currencifySymbol } ${ amountFormatted }`
}

</script>

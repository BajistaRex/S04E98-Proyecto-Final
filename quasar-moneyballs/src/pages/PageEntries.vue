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
        <q-item-section
          :class="useAmountColorClass(entry.amount)"
        >
          {{ entry.name }}
        </q-item-section>

        <q-item-section
        :class="useAmountColorClass(entry.amount)"
          side
        >
          {{ useCurrencify(entry.amount) }}
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
import { useCurrencify } from 'src/use/useCurrencify'
import { useAmountColorClass } from 'src/use/useAmountColorClass'

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

</script>

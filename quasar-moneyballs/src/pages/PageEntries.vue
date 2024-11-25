<template>
  <q-page>
    <div class="q-pa-md">
    <q-list
      bordered
      separator
    >
      <q-item
        v-for="entry in entries"
      >
        <q-item-section>
          {{ entry.name }}
        </q-item-section>

        <q-item-section side>
          {{ entry.amount }}
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
    name: 'Salary',
    amount: 4999.99
  },
  {
    id: 'id2',
    name: 'Rent',
    amount: -999
  },
  {
    id: 'id3',
    name: 'Phone',
    amount: -14.99
  },
  {
    id: 'id4',
    name: 'Unknown',
    amount: 0
  },
])

</script>

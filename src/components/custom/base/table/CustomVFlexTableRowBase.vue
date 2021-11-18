<script setup lang="ts">
export type VFlexTableRowBaseProps = {
  rows: any[]
}
const props = defineProps<VFlexTableRowBaseProps>()
</script>

<template>
  <div v-for="row in props.rows" :key="row.id" class="flex-table-item">
    <div class="flex-table-cell is-bold" data-th="University">
      <span class="dark-text">{{ row.university }}</span>
    </div>
    <div class="flex-table-cell" data-th="Degree">
      <span class="light-text">{{ row.degree }}</span>
    </div>
    <div class="flex-table-cell" data-th="Date">
      <span class="light-text">{{ row.date }}</span>
    </div>
    <div class="flex-table-cell" data-th="Grade">
      <span class="light-text">{{ row.grade }}</span>
    </div>
    <div class="flex-table-cell" data-th="Verified">
      <span
        class="tag is-rounded"
        :class="[
          row.verified === 'Yes' && 'is-success',
          row.verified === 'Undetermined' && 'is-info',
          row.verified === 'No' && 'is-orange',
        ]"
        >{{ row.verified }}</span
      >
    </div>
    <div class="flex-table-cell cell-end" data-th="Actions">
      <CustomFlexTableDropdown />
    </div>
  </div>
</template>

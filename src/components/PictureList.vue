<script setup>
import logo from "../assets/logo.png";
import {defineProps} from "vue";

const props = defineProps({
  pictureList: []
})
</script>

<template>
  <a-list
      item-layout="horizontal"
      :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
      :data-source="props.pictureList"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card hoverable>
          <template #cover>
            <img alt="example" :src="item.url" />
          </template>
          <a-card-meta :title="item.title" />
        </a-card>
      </a-list-item>
    </template>
  </a-list>

</template>

<style scoped>
.logo {
  width: 200px;
}
</style>
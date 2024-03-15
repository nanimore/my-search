<script setup>

import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostList from "@/components/PostList.vue";
import PictureList from "@/components/PictureList.vue";
import UserList from "@/components/UserList.vue";
import MyDivider from "@/components/MyDivider.vue";

const route = useRoute();
const router = useRouter();
// const searchText = ref("");
// const searchText = ref(route.query.text || "");
const activeKey = route.params.category; // 默认选中第一项

const initSearchParams = {
  text: "",
  pageSize: 10,
  pageNum: 1,
};


const searchParams = ref(initSearchParams);
watchEffect(() => {
  searchParams.value = {
    ...initSearchParams,
    text: route.query.text,
  } ;
});


const onTabChange = (key) => {
  router.push({
    path: `/${key}`,
    query: searchParams.value,
  });
};

import myAxios from "@/plugins/myAxios";

// myAxios.get("/post/get/vo?id=" + "1").then((res) => {
//   console.log(res);
// });

const postList = ref([]);
const pictureList = ref([]);
const userList = ref([]);
const loadData = (params) => {
  const query = {
    ...params,
    searchText: params.text,
  };

  myAxios.post("/search/all", query).then((res) => {
    postList.value = res.postList;
    userList.value = res.userList;
    pictureList.value = res.pictureList;
  });
};

// 首次请求
loadData(initSearchParams);

const onSearch = (value) => {
  // alert(value);
  router.push({
    query: searchParams.value,
  });

  // 根据条件查询
  loadData(searchParams.value);
};

</script>

<template>
<!--  <img alt="Vue logo" src="../assets/logo.png">-->
  <div class="index-page">

    <a-input-search
        v-model:value="searchParams.text"
        placeholder="input search text"
        enter-button="Search"
        size="large"
        @search="onSearch"
    />
    <MyDivider />

    <a-tabs v-model:activeKey="activeKey" @change="onTabChange" >
      <a-tab-pane key="post" tab="文章">
        <PostList :post-list="postList" />
      </a-tab-pane>
      <a-tab-pane key="picture" tab="图片" force-render>
        <PictureList :picture-list="pictureList" />
      </a-tab-pane>
      <a-tab-pane key="user" tab="用户">
        <UserList/>
      </a-tab-pane>
    </a-tabs>

  </div>

</template>

<style scoped>

</style>
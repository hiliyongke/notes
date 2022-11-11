<template>
  <main>
    <h3 class="title">致自己</h3>
    <p v-html="content"></p>
    <p align="center">
      <a class="start" href="/notes/01-基础技能/index">
        扬帆起航
      </a>
      <a class="github" href="https://github.com/hiliyongke" target="_blank">
        Github
      </a>
    </p>

  </main>
</template>
<script setup>
import { onBeforeMount, onUnmounted, ref } from 'vue';
let content = ref('')
let timer = 0
onBeforeMount(
  () => {
    let str = `
    <p>最怕你一生碌碌无为，还安慰自己平凡可贵。</p>
    <p>不要惧怕写出不完美的代码，只要在后续迭代过程中“见招拆招”，代码就会变得越来越完善，框架也会变得越来越健壮。</p>
    <h3>主要内容</h3>
    <p>记录 JavaScript 的各种方法</p>
    <p>Vue2 和 Vue3 的一些使用</p>
    <p>Vue 周边一些生态</p>
    <p>TypeScript 基础</p>
    <p>文章摘录</p>
    <p>前端面试题</p>`.trim()
    let str_ = ''
    let i = 0
    timer = setInterval(() => {
      if (str_.length < str.length) {
        str_ += str[i++]
        content.value = str_
      } else {
        clearInterval(timer)
        content.value = str_
      }
    }, 100)
  })
onUnmounted(() => {
  clearInterval(timer)
})
</script>
<style scoped>
main {
  max-width: 700px;
  margin: 40px auto;
  padding-bottom: 0;
}

.title {
  text-align: center;
  font-weight: 600;
  font-size: 22px;
}

.github,
.start {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: none;
  outline: none;
  user-select: none;
  text-decoration: none;
  height: 35px;
  border-radius: 20px;
  transition: .3s;
  line-height: 1;
  cursor: pointer;
  padding: 0 25px;
  background: #2d5af1;
  white-space: nowrap;
  vertical-align: middle;
  color: #fff;
}

.github {
  background: #f0f0f0;
  color: #333;
  margin-left: 15px;
}

p {
  font-weight: bolder;
  font-size: large;
  margin: 0;
  padding: 10px;
  line-height: 32px;
}

h3 {
  font-size: 17px;
  font-weight: 600;

  line-height: 50px;
}
</style>

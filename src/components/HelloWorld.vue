<template>
  <div class="total-box">
    <div class="title-box">
      <p>21251109152 叶霆轩 智能计算器</p>
    </div>
    <div class="video-box">
      <video controls class="video-player">
        <source src="@/assets/petal_20241107_204606.mp4" type="video/mp4" />
        您的浏览器不支持视频播放，请升级您的浏览器。
      </video>
    </div>
  </div>
</template>

<script setup>
// 可根据需要添加 JavaScript 逻辑，如加载视频、监听播放事件等
</script>

<style>
.total-box {
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
}

.title-box {
  height: 5vh;
}

p {
  font-size: 20px;
  margin: 0;
  padding: 0;
}

.video-box {
  height: 90vh;
}

video {
  height: 100%;
}
</style>

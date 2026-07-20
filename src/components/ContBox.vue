<template>
  <div class="count_box">
    <button @click="handleSub" class="minus">-</button>
    <input class="inp" @change="handleChange" :value="value" type="text" name="" id="">
    <button @click="handleAdd" class="add">+</button>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleSub () {
      if (this.value <= 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    handleChange (e) {
      const num = +e.target.value // 转数字处理 (1) 数字 (2) NaN
      // console.log(num)

      // 输入了不合法的文本 或 输入了负值，回退成原来的 value 值
      if (isNaN(num) || num < 0) {
        e.target.value = this.value
      }

      this.$emit('input', num)
    }
  }
}
</script>

<style lang="less" scoped>
.count_box {
  width: 110px;
  display: flex;
  .add, .minus {
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
  }
  .inp {
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
    margin: 0 5px;
    text-align: center;
  }
}
</style>

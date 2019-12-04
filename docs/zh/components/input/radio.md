# 单选

## 基础用法

<bt-panel>
  <bt-radio v-model="radio" :label="1">React</bt-radio>
  <bt-radio v-model="radio" :label="2">Vue</bt-radio>
  <bt-radio v-model="radio" :label="3" disabled>Angular</bt-radio>
</bt-panel>

<script>
export default {
  data () {
    return {
      radio: 1
    }
  }
}
</script>


``` html
<bt-panel>
  <bt-radio v-model="radio" :label="1">React</bt-radio>
  <bt-radio v-model="radio" :label="2">Vue</bt-radio>
  <bt-radio v-model="radio" :label="3" disabled>Angular</bt-radio>
</bt-panel>

<script>
export default {
  data () {
    return {
      radio: 1
    }
  }
}
</script>
```
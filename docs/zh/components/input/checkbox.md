# 多选

## 基础用法

<bt-panel>
  <bt-checkbox v-model="checked">React</bt-checkbox>
  <bt-checkbox v-model="uncheck">Vue</bt-checkbox>
  <bt-checkbox v-model="uncheck" disabled>Angular</bt-checkbox>
</bt-panel>

<script>
export default {
  data () {
    return {
      checked: true,
      uncheck: false,
    }
  }
}
</script>

``` html
<bt-panel>
  <bt-checkbox v-model="checked">React</bt-checkbox>
  <bt-checkbox v-model="uncheck">Vue</bt-checkbox>
  <bt-checkbox v-model="uncheck" disabled>Angular</bt-checkbox>
</bt-panel>

<script>
export default {
  data () {
    return {
      checked: true,
      uncheck: false,
    }
  }
}
</script>
```
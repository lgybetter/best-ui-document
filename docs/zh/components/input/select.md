# 下拉选择

## 基础用法

<bt-panel>
  <bt-select v-model="select">
  <bt-option :value="0" label="Vue"></bt-option>
  <bt-option :value="1" label="React"></bt-option>
  <bt-option :value="2" label="Angular"></bt-option>
  </bt-select>
</bt-panel>

<script>
export default {
  data () {
    return {
      select: 0
    }
  }
}
</script>

``` html
<bt-panel>
  <bt-select v-model="select" disabled>
    <bt-option :value="0"
      label="Vue">
    </bt-option>
    <bt-option :value="1"
      label="React">
    </bt-option>
    <bt-option :value="2"
      label="Angular">
    </bt-option>
  </bt-select>
</bt-panel>

<script>
export default {
  data () {
    return {
      select: 0
    }
  }
}
</script>
```
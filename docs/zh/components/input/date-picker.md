# 日期选择

## 基础用法

<bt-panel>
  <bt-date-picker
    v-model="currentTime">
  </bt-date-picker>
</bt-panel>

<script>
export default {
  data () {
    return {
      currentTime: new Date()
    }
  }
}
</script>

``` html
<bt-panel>
  <bt-row>
    <bt-col :span="8">
      <bt-date-picker
        v-model="currentTime">
      </bt-date-picker>
    </bt-col>
  </bt-row>
</bt-panel>

<script>
export default {
  data () {
    return {
      currentTime: new Date()
    }
  }
}
</script>
```
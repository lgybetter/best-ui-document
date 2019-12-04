# 表格

## 基础用法

<bt-table :data="list">
  <bt-table-column label="Name" prop="name"></bt-table-column>
  <bt-table-column label="Age" prop="age"></bt-table-column>
  <bt-table-column label="City" prop="city"></bt-table-column>
</bt-table>

<script>
export default {
  data () {
    return {
      list: [
        { name: 'Tom', age: 24, href: 'https://www.qq.com', city: 'SZ' },
        { name: 'Jhon', age: 25, href: 'https://lgybetter.com', city: 'GZ' },
        { name: 'Sam', age: 26, href: 'https://www.github.com', city: 'SH' }
      ],
    }
  }
}
</script>


``` html
<bt-table :data="list">
  <bt-table-column label="Name" prop="name"></bt-table-column>
  <bt-table-column label="Age" prop="age"></bt-table-column>
  <bt-table-column label="City" prop="city"></bt-table-column>
</bt-table>

<script>
export default {
  data () {
    return {
      list: [
        { name: 'Tom', age: 24, href: 'https://www.qq.com', city: 'SZ' },
        { name: 'Jhon', age: 25, href: 'https://lgybetter.com', city: 'GZ' },
        { name: 'Sam', age: 26, href: 'https://www.github.com', city: 'SH' }
      ],
    }
  }
}
</script>
```
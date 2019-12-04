module.exports = {
  title: 'Best UI',
  description: '基于 Vue2.x 框架组件库',
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // },
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav:[
      { text: 'Blog', link: 'https://lgybetter.com/' }, // 外部链接
      {
        text: 'GitHub',
        items: [
          { text: '源码地址', link: 'https://github.com/DouKu/best-ui' },
        ]
      }        
    ],
    sidebar: [
      {
        title: '快速入门',
        collapsable: false,
        children: [
          'zh/start'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: '通用',
            collapsable: false,
            children: [
              'zh/components/common/button',
            ]
          },
          {
            title: '布局',
            collapsable: false,
            children: [
              'zh/components/layout/col',
              'zh/components/layout/row',
            ]
          },
          {
            title: '展示',
            collapsable: false,
            children: [
              'zh/components/show/table',
              'zh/components/show/pagination',
              'zh/components/show/form',
              'zh/components/show/calendar',
              'zh/components/show/tag',
              'zh/components/show/panel',
            ]
          },
          {
            title: '输入',
            collapsable: false,
            children: [
              'zh/components/input/input',
              'zh/components/input/select',
              'zh/components/input/radio',
              'zh/components/input/checkbox',
              'zh/components/input/date-picker',
            ]
          }
        ]
      }
    ]
  }
}
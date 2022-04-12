const Hooks = {
  2: {
    'created': 'bind',
    'mounted': 'inserted',
    'updated': 'componentUpdated',
    'unmounted': 'unbind'
  },
  3: {
    'created': 'created',
    'mounted': 'mounted',
    'updated': 'updated',
    'unmounted': 'unmounted'
  }
}

export default {
  install(app, options) {
    const vueVersion = app.version.split('.')[0]

    const { echarts, ...args } = options

    app.directive('chart', {
      [Hooks[vueVersion]['created']](el) {
        el.resizeEventHandler = () => el.echartsInstance.resize()
        el.resizeObserver = new ResizeObserver(() => el.echartsInstance.resize())

        window.addEventListener('resize', el.resizeEventHandler, false)
        el.resizeObserver.observe(el)
      },
      [Hooks[vueVersion]['mounted']](el, binding) {
        el.echartsInstance = echarts.init(el, args)
        el.echartsInstance.setOption(binding.value)
      },
      [Hooks[vueVersion]['updated']](el, binding) {
        el.echartsInstance.setOption(binding.value)
      },
      [Hooks[vueVersion]['unmounted']](el) {
        window.removeEventListener('resize', el.resizeEventHandler, false)
        el.resizeObserver.disconnect()

        el.echartsInstance.dispose()
      }
    })
  }
}

/**
 * tab
 */
export default {
  state: {
    options: [],
    activeIndex: '/dashboard'
  },
  mutations: {
    // 添加tabs
    addTab (state, data) {
      this.state.options.push(data);
    },
    // 删除tabs
    deleteTab (state, route) {
      let index = 0;
      for (let option of state.options) {
        if (option.route === route) {
          break;
        }
        index++;
      }
      this.state.options.splice(index, 1);
    },
    // 设置当前激活的tab
    setActiveIndex (state, index) {
      this.state.activeIndex = index;
    }
  }
}

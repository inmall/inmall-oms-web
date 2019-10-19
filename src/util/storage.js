/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = (name, isObject) => {
  if (!name) return;
  let value = window.localStorage.getItem(name);
  if (isObject && value) {
      value = JSON.parse(value);
  }
  return value;
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}

/**
 * 清除localStorage
 */
export const clearStore = () => {
  window.localStorage.clear();
}

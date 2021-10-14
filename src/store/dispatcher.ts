import store from './'

/**
 * redux dispatcher proxy
 * @param {Object} action redux Action 对象
 * @param {String} action.type redux Action类型
 * @param {Object} action.data 数据
 * @param {Object} option 配置（暂时不使用）
 * @param {Object} option.sync 同步发出，不做缓冲（暂时不使用）
 */
export default function dispatcher (action: any, option = {}) {
    return store.dispatch(action)
}
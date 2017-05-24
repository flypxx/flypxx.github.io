export function setStorageItem(type, key, value) {
  let name = '__' + type + '__'
  if (_isStorageSupported()) {
    let store
    try {
      store = window.localStorage.getItem(name)
    } catch (error) {
      store = getSessionStorageItem(name)
    }
    if (!store) {
      store = {}
    } else {
      store = JSON.parse(store)
    }
    store[key] = value
    try {
      window.localStorage.setItem(name, JSON.stringify(store))
    } catch (error) {
      setSessionStorageItem(name, JSON.stringify(store))
    }
  } else {
    value = escape(value)
    _addCookie(key, value, 3)
  }
}

export function getStorageItem(type, key, def) {
  let name = '__' + type + '__'
  if (_isStorageSupported()) {
    let store
    try {
      store = window.localStorage.getItem(name)
    } catch (error) {
      store = getSessionStorageItem(name, def)
    }
    if (!store) {
      return def
    }
    store = JSON.parse(store)[key]
    if (!store) {
      return def
    }
    return store || def
  } else {
    let value = _getCookie(key)
    value = unescape(value)
    return value || def
  }
}

export function setSessionStorageItem(key, value) {
  if (_isStorageSupported()) {
    window.sessionStorage.setItem(key, value)
  } else {
    value = escape(value)
    _addCookie(key, value, 3)
  }
}

export function getSessionStorageItem(key, def) {
  if (_isStorageSupported()) {
    return window.sessionStorage.getItem(key) || def
  } else {
    let value = _getCookie(key)
    value = unescape(value)
    return value || def
  }
}

function _getCookie(name) {
  var strCookie = document.cookie
  var arrCookie = strCookie.split('; ')
  for (var i = 0, len = arrCookie.length; i < len; i++) {
    var arr = arrCookie[i].split('=')
    if (arr[0] === name) {
      return arr[1]
    }
  }
  return ''
}

function _addCookie(name, value, expiresHours) {
  let cookieString = name + '=' + value
  // 判断是否设置过期时间
  if (expiresHours > 0) {
    let date = new Date()
    date.setTime(date.getTime() + expiresHours * 3600 * 1000)
    cookieString = cookieString + '; expires=' + date.toGMTString() + '; path=/'
  }
  document.cookie = cookieString
}

function _isStorageSupported() {
  let testKey = 'test'
  let globalStorage = window.sessionStorage
  try {
    globalStorage.setItem(testKey, 'testValue')
    globalStorage.removeItem(testKey)
    return true
  } catch (error) {
    return false
  }
}

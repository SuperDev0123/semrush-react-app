export const Storage = {
  set: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
  get: (key, isTransformed = false) => {
    const storageData = localStorage.getItem(key)

    if (!isTransformed) return storageData

    try {
      return JSON.parse(storageData)
    } catch (_e) {
      return {}
    }
  },
  clear: () => localStorage.clear(),
  delete: (key) => localStorage.removeItem(key),
}

export const StorageTTL = {
  set: (key, data, expiry) => localStorage.setItem(key, JSON.stringify({ data, expiry })),
  get: (key, isTransformed = false) => {
    try {
      const storageData = JSON.parse(localStorage.getItem(key))
      const now = new Date()
      if (now > new Date(storageData.expiry)) {
        localStorage.removeItem(key)
        return {}
      }
      return storageData.data
    } catch (_e) {
      return {}
    }
  },
  clear: () => localStorage.clear(),
  delete: (key) => localStorage.removeItem(key),
}
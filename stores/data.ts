type DataItem = {
  id: number
  text: string
}

export const useDataStore = defineStore('data', {
  state: () => ({
    encryptedData: null as string | null,
  }),
  getters: {
    data: (state) => {
      return state.encryptedData
        ? JSON.parse(atob(state.encryptedData))
        : null
    }
  },
  actions: {
    setData (data: DataItem[] | null) {
      this.encryptedData = btoa(JSON.stringify(data))
    }
  },
})
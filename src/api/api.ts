export type SchulteTableStateDomainType = {
  gridSize: number
  bestRecords: {
    [key: string]: number
  }
  hintsMode: boolean
}

export const schulteTableAPI = {
  load() {},
  save(state: SchulteTableStateDomainType) {
    localStorage.setItem("schulte-table-state", JSON.stringify(state))
  },
}

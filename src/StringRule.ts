import { BasicRule } from './BasicRule'

export class StringRule extends BasicRule {
  required(errorMessage?: string) {
    this.addValidator((val) => {
      if (!val) {
        return Promise.reject(errorMessage)
      }
    })
    return this
  }

  min(minLen: number, errorMsg?: string) {
    this.addValidator((value) => {
      if (value.length < minLen) {
        return Promise.reject(errorMsg)
      }
    })
    return this
  }

  max(maxLen: number, errorMsg?: string) {
    this.addValidator((value) => {
      if (value.length > maxLen) {
        return Promise.reject(errorMsg)
      }
    })
    return this
  }

  matchReg(reg: RegExp, errorMsg?: string) {
    this.addValidator((value) => {
      if (!reg.test(value)) {
        return Promise.reject(errorMsg)
      }
    })
    return this
  }

  unMatchReg(reg: RegExp, errorMsg?: string) {
    this.addValidator((value) => {
      if (reg.test(value)) {
        return Promise.reject(errorMsg)
      }
    })
    return this
  }
}

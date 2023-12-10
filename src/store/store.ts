import { makeAutoObservable } from 'mobx'

export default class Store {
  hello = 'Hello World'!

  constructor() {
    makeAutoObservable(this)
  }
}

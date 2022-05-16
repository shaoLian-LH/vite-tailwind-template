import { defineStore, _GettersTree } from 'pinia'


export interface IExampleStore {}
export interface IExampleGetters extends _GettersTree<IExampleStore> {}
export interface IExampleActions {}

export const useStoreExample = defineStore<'example', IExampleStore, IExampleGetters, IExampleActions>('example',{ 
  state: () => ({}),
  getters: {},
  actions: {}
})
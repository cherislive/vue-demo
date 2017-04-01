import { fetchListAction } from '../actions/action'
import { fetchListGetter } from '../getters/getter'
import { fetchListMutation } from '../mutations/mutation'

export const list = {
  state: {
    isFetching: false,
    data: []
  },
  actions: fetchListAction,
  getters: fetchListGetter,
  mutations: fetchListMutation
}

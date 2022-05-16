import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

export interface State {

}

export interface AllState extends State {

}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state() {
        return {

        }
    },
    strict: import.meta.env.MODE !== 'production'
})

export const useStore = () => {
    return baseUseStore<AllState>(key)
}
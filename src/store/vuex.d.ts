import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { AllState } from './index';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<AllState>
    }
}
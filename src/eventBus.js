import { ref } from "vue";
const bus = ref(new Map());

export default function useEventsBus(){
    function emit(event, val) {
        bus.value.set(event, val);
    }

    return {
        emit,
        bus
    }
}
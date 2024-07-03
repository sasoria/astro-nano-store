import { useStore } from '@nanostores/react';
import { isOpen } from "../store/store.ts";

const ReactComponentTwo = () => {
    const $isOpen = useStore(isOpen);
    console.log("Value of isOpen:" + $isOpen)

    return (
        <button onClick={() => isOpen.set(!$isOpen)}>
            Button Two
        </button>
    );
}

export default ReactComponentTwo;
import { useStore } from '@nanostores/react';
import { isOpen } from "../store/store.ts";

const ReactComponentOne = () => {
    const $isOpen = useStore(isOpen);

    return (
        <button onClick={() => isOpen.set(!$isOpen)}>
            Button One
        </button>
    );
}

export default ReactComponentOne;
import { AbstractView } from "./AbstractView";
import Hardware from "../entities/Hardware";

export class HardwareListView extends AbstractView {
    async onStateChange(): Promise<boolean> {
        // Validate state change.
        if(this.state.length > 0 &&
            this.state[0].id &&
            this.state[0].name) {
            return true;
        }

        // If state change is invalid, function returns false.
        return false;
    }


    render(): Element {
        const returnElement = document.createElement('div');

        this.state.forEach((hardware: Hardware) => {
            const listElement = document.createElement('a');
            listElement.classList.add('list-group-item');
            listElement.classList.add('list-group-item-action');
            listElement.innerText = hardware.name;
            listElement.href = '/hardware/' + hardware.id;

            returnElement.appendChild(listElement);
        });

        return returnElement;
    }
}


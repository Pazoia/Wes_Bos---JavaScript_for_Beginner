import { convert } from "./lib.js";
import { formatCurrency } from "./utils.js";
import { fromInput, toSelect, toAmount } from "./elements.js";

export async function handleInput() {
    const rawAmount = await convert(fromInput.value, toSelect.value);
    toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}

export function updateInput(setter, dataName, value) {
    setter((prev) => ({...prev, [dataName]: value }));
}
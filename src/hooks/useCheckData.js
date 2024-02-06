export const useCheckData = (value) => {
    console.log(value)
    if (value && !isNaN(value)) {
        return value
    } else {
        return 'N/A'
    }
}

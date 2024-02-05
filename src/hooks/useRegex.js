function useRegex(input) {
    const regex = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}).*/
    const replacement = '$1 $2'
    
    return input.replace(regex, replacement)
}

export default useRegex
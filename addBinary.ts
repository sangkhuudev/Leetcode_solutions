function addBinary(a: string, b: string) : string {
    const [num1, num2] = [BigInt(`0b${a}`), BigInt(`0b${b}`)]
    return (num1 + num2).toString(2)
} 
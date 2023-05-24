const HexToRGBA = (Hex: string, Alpha: number = 1) => {
    const [r, g, b] = Hex.match(/\w\w/g)?.map(x => parseInt(x, 16))!;
    return `rgba(${r},${g},${b},${Alpha})`;
};

export default HexToRGBA;
const CHARSET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
export const encode = (int: number): string => {
    if (int === 0) {
        return CHARSET[0];
    }
    let res: string = "";
    while (int > 0) {
        res = CHARSET[int % 62] + res;
        int = Math.floor(int / 62);
    }
    return res;
};
export const decode = (str: string): number => {
    let res = 0,
        length = str.length,
        i: number, char: number;
    for (i = 0; i < length; i++) {
        char = str.charCodeAt(i);
        if (char < 58) {
            // 0-9
            char = char - 48;
        } else if (char < 91) {
            // A-Z
            char = char - 29;
        } else {
            // a-z
            char = char - 87;
        }
        res += char * Math.pow(62, length - i - 1);
    }
    return res;
};
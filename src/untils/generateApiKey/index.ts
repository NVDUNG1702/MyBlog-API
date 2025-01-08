import { Charset } from "src/constant";

export function generateCustomCode(
    length: number = 10,
    charset: Charset = Charset.ALPHANUMERIC,
): string {
    let characters = '';
    switch (charset) {
        case Charset.ALPHANUMERIC:
            characters =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            break;
        case Charset.NUMERIC:
            characters = '0123456789';
            break;
        case Charset.ALPHABET:
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            break;
        case Charset.HEX:
            characters = '0123456789abcdef';
            break;
        case Charset.SPECIAL:
            characters =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
            break;
        default:
            throw new Error(`Unsupported charset: ${charset}`);
    }

    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

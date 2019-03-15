export default function validateEmail(email: string): boolean {
    const re = /^([A-Za-z0-9 \-\.])+\@(successive.tech)/;
    return re.test(email);
}

export default async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok');
        }, 1000);
    });
}
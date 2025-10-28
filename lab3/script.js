function randomAsync(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject(new Error("Щось пішло не так..."));
            } else {
                resolve(`${name} виконано успішно`);
            }
        }, 1000);
    });
}

async function main() {
    try {
        const result = await Promise.any([
            randomAsync("Функція 1"),
            randomAsync("Функція 2")
        ]);
        console.log(result);
    } catch (error) {
        console.log("Всі функції завершилися помилкою:", error);
    }
}

(async () => {
    await main();
})();



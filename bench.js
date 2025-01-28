class Benchmark {
    constructor() {
        this.results = [];
    }

    async bench(fns) {
        for (const [name, fn] of Object.entries(fns)) {
            const result = await this.run(name, fn);
            this.results.push(result);
        }

        this.displayresult();
    }

    async run(name, fn) {
        const start = performance.now();
        await fn();
        const end = performance.now();
        return { name, time: end - start };
    }

    displayresult() {
        this.results.sort((a, b) => a.time - b.time);

        console.log('Results:');
        this.results.forEach((result, index) => {
            const { name, time } = result;
            let unit = 'ms';
            let timeStr = time.toFixed(2);

            if (timeStr < 1) {
                unit = 'μs';
                timeStr = (time*1000).toFixed(2);
            } else if (timeStr > 1000) {
                unit = 's';
                timeStr = (time/1000).toFixed(2);
            };

            console.log(`${index + 1}: ${name} - ${timeStr}${unit}`);
        })
        console.log('Winner:', this.results[0].name);
    }
}
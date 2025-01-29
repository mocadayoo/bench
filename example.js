const bench = new Benchmark();

const fns = {
    'For': () => {
        let total = 0;
        for (let i = 1; i <= 100_000; i++) {
            total += i;
        }
    },
    'While': () => {
        let total = 0;
        let i = 1;
        while (i <= 100_000) {
            total += i;
            i++;
        }
    }
};

bench.bench(fns);

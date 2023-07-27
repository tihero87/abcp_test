export const useThrottle = <T extends (...args: undefined[]) => void>(cb: T, delay: number): T => {
    let shouldWait = false;
    return ((...args: any[]) => {
        if (shouldWait) return;

        cb(...args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
        }, delay);
    }) as T;
};
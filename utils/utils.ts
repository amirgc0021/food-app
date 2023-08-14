type callBackFunc = (...args: any[]) => any;

type throttleFunctionType = (func: callBackFunc, delay: number) => (...args: any[]) => callBackFunc;

export const Throttle: throttleFunctionType = (func, delay) => {
	// Previously called time of the function
	let prev = 0;

	return (...args: string[]) => {
		// Current called time of the function
		let now = new Date().getTime();

		// If difference is greater than delay call
		// the function again.
		if (now - prev > delay) {
			prev = now;

			// "..." is the spread operator here 
			// returning the function with the 
			// array of arguments
			return func(...args);
		}
	}
};

export const Debounce = (func: callBackFunc, delay: number) => {
	let debounceTimer: NodeJS.Timeout;
	return (...args: any[]) => {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => func(...args), delay)
	}
};
/**
 * @description: sleep for a while on runtime
 * @param time: number 
 * @return void
 */
export const sleep = async (time) => {
	await new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(time);
		}, time);
	});
};
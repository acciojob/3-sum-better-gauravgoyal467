function threeSum(arr, target) {
// write your code here
	let arr=arr.sort();var ans;
	for (let i = 0; i < arr.length-2; i++) {
		let sum=arr[i];let reamining=target-arr[i];
		let j=i+1;let k=arr.length-1;
		while (j<k) {
			let current=arr[j]+arr[k];
			sum=sum+current;
			if((ans==undefined) || (Math.abs(ans-target)>Math.abs(sum-target))){
				ans=sum;
			}
			if(current>remaining){
				k--;
			}else{
				j++;
			}
		}
	}
	return ans;
}
module.exports = threeSum;

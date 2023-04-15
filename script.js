let arr=[-4,1,2,-1];
let target=1;

function threeSum(arr, target) {
// write your code here
	let array=arr.sort();var ans;
	for (let i = 0; i < array.length-2; i++) {
		let sum=array[i];let remaining=target-array[i];
		let j=i+1;let k=array.length-1;
		while (j<k) {
			let current=array[j]+array[k];
			console.log(current);
			sum=sum+current;
			console.log(sum);
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
console.log(threeSum(arr,target));
module.exports = threeSum;

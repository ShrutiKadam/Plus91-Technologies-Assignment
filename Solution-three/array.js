const getKMaxNumber=(nums1=[],nums2=[],k)=>{
    const m=nums1.length;   //Store length of the arrays
    const n=nums2.length;   //Store lengths of the arrays
    let res=[]              //Store the resultant subsequence
   
    for (let s1=Math.max(0,k-n);s1<=Math.min(k,m)+1;s1++){

        let p1=helper(nums1,s1)           //p1 and p2 stores maximum number possible of length s1 and k - s1
        let p2=helper(nums2,k-s1)
        res=Math.max(res,[Math.max(p1,p2).pop(0)])
    }
    return res

}
    //Function to calculate maximum 
    const helper=(nums,cap_len)=>{
            let ans=[]                                      //Store the resultant maximum
            let ln=nums.length                              //Length of the nums array
        for (const [i,val] of nums.entries()){

            while ( ans && ans[ans.length-1]<val && ln-i > cap_len-ans.length ){

                 // If true, then pop (remove the last element)
                ans.pop()                   
            }
            if(ans.length < cap_len){    //Check the length with required length

                ans.push(val);      // Append the value to ans
            }
        }
        return ans
}
//input arrays
 nums1 = [3,4,6,5];
 nums2 = [9,1,2,5,8,3];
 K = 5;
  
// Function Call
console.log(getKMaxNumber(nums1, nums2, K));
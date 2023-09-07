exports.ValidateLuhnAlgorithm = function (input) {

    let nums =  input.split(" ").join("")//remove spaces
    if (!/^\d+$/.test(nums)) { //is input contains non numbered characters?
        return false;
    }
    else {
        let list = nums.split('');//input convert to list
        let sum = 0;
        for (let i = 0; i < list.length; i++) {

            let j = Number(list[i])  

            if (i % 2 == 0) {
                sum += j;
            } else {
                sum = sum + (j * 2 > 9 ? j * 2 - 9 : j * 2 );
            }
        }
        return (sum%10===0);
    }
};

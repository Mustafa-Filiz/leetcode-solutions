function twoSum(nums: number[], target: number): number[] {
    let firstIndex: number
    let secondIndex: number

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                break
            }

            const sum = nums[i] + nums[j]

            if (sum === target) {
                firstIndex = j
                secondIndex = i
                break
            }
        }
    }

    return [firstIndex, secondIndex]
};
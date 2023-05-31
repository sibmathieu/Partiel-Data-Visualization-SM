function twoSum(nums, target) {
    const numberIndexMap = new Map();
  
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
      const currentNumber = nums[currentIndex];
      const complement = target - currentNumber;
  
      if (numberIndexMap.has(complement)) {
        const complementIndex = numberIndexMap.get(complement);
        return [complementIndex, currentIndex];
      }
  
      numberIndexMap.set(currentNumber, currentIndex);
    }
  
    return []; 
  }

const twoSum = (arr, target) => {
    let hashMap = new Map() 
    for(let i=0; i<arr.length; i++){
        const requireNumber = target - arr[i]
        if(hashMap.has(requireNumber)) return [hashMap.get(requireNumber), i]
        hashMap.set(arr[i], i)
    }
    return hashMap
}

console.log(twoSum([8, 2, 3, 5], 5))

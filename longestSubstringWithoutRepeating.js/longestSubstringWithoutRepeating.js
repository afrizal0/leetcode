const longestSubstring = (s) => {
    let hashMap = new Map(), longest=1, i
    for(i=0; i<s.length; i++){
        if(hashMap.has(s[i])){
            hashMap.clear()
            i=index+1
        }else{
            index=i
        }
        hashMap.set(s[i], true)
        if(hashMap.size>longest) longest=hashMap.size
    }
    return longest
}

console.log(longestSubstring("abcabcbb"))
console.log(longestSubstring("bbbb"))
console.log(longestSubstring("pwwkew"))
console.log(longestSubstring("aab"))

class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var result = ""
        var control = ""

        for letter in s {
            if let foundIndex = control.firstIndex(of: letter) {
                let afterDuplicate = control.index(after: foundIndex)
                control = String(control[afterDuplicate...]) + String(letter)
            } else {
                control.append(letter)
            }

            if control.count > result.count {
                result = control
            }
        }

        return result.count
    }
}
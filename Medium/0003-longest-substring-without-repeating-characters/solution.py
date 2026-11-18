class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        result = ""
        control = ""

        for letter in s:
            found_index = control.find(letter)

            if found_index == -1:
                control += letter
            else:
                control = control[found_index + 1:] + letter

            if len(control) > len(result):
                result = control

        return len(result)
        
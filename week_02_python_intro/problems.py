def reverse_string(s):
    output = ""
    for i in range(len(s) - 1, -1, -1):
        output += s[i]
    return output

def find_max(lst):
    max_value = lst[0]
    for i in range(1, len(lst)):
        if lst[i] > max_value:
            max_value = lst[i]
    return max_value    

def is_palindrome(word):
    reversed_word = reverse_string(word)
    if word == reversed_word:
        return True
    else:
        return False
    
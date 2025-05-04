def reverse_string(s):
    reverse = ""
    for char in s :
        reverse = char + reverse
    return reverse
    pass

def find_max(lst):
    max_val = 0
    for num in lst:
        if num > max_val:
            max_val = num 
    return max_val
    pass

def is_palindrome(word):
    reverse = ""
    for char in word:
        reverse = char + reverse 
    return word == reverse

    pass
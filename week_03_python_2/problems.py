def reverse_string(str):
    return str[::-1]

def find_max(lst):
    if len(lst) == 0:
        return None
    lst.sort()
    return lst[-1]

def is_palindrome(str):
    return str == str[::-1]
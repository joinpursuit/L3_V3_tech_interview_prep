def main():
    print(reverse_string("hello"))
    print(find_max([1, 5, 3, 9]))
    print(is_palindrome("racecar"))
    print(is_palindrome("hello"))

def reverse_string(s):
    return s[::-1]

def find_max(lst):
    return lst[-1]

def is_palindrome(word):
    pointer1 = 0
    pointer2 = len(word) - 1
    while pointer1 < pointer2:
        if word[pointer1] != word[pointer2]:
            return False
        pointer1 += 1
        pointer2 -= 1
    return True



if __name__ == "__main__":
    main()
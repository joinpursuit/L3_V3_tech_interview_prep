import pytest
from problems import is_palindrome

def test_is_palindrome():
    assert is_palindrome("racecar")
    assert not is_palindrome("hello")
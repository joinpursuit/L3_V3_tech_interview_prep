import pytest
from problems import is_palindrome

def test_is_palindrome():
  assert is_palindrome("racecar")
    
    
def test_not_is_palindrome():
  assert not is_palindrome("hello")

def test_empty():
    assert is_palindrome("")
   

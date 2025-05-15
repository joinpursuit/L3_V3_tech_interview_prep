import pytest
from problems import find_max

def test_find_max():
    assert find_max([1, 5, 3, 9]) == 9

def test_empty():
    assert find_max([]) == None

def test_str():
    with pytest.raises(AttributeError):
        find_max("hello")

def test_int():
    with pytest.raises(TypeError):
        find_max(1)

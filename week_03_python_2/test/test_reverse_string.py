import pytest
from problems import reverse_string


def test_str():
    for i in ["hello", "a", "FdafdsGb"]:
        assert reverse_string("hello") == "olleh"

def test_empty_str():
    assert reverse_string("") == ""

def test_int():
    with pytest.raises(TypeError):
        reverse_string(1)




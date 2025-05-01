# All variables are initialized with example values and comments indicate the expected output.
# Python Variables and Data Types
# Python supports dynamic typing, meaning you don't need to declare the type of a variable when you create one.
# You can assign a value to a variable and Python will automatically determine the type of the variable based on the value you assign to it.
# The type of a variable can change during the execution of a program.
# Python has several built-in data types, including:
# int, float, str, bool, list, tuple, dict, set, range, bytearray, bytes, memoryview, complex, frozenset.
# The following code demonstrates the use of these data types and some common operations on them.
integer_value = 5  # 5
string_value = "Hello World!"  # "Hello World!"
float_value = 3.14  # 3.14
boolean_value = True  # True
none_value = None  # None
list_value = [1, 2, 3, 4, 5]  # [1, 2, 3, 4, 5]
tuple_value = (1, 2, 3, 4, 5)  # (1, 2, 3, 4, 5)
dictionary_value = {1: "one", 2: "two", 3: "three"}  # {1: "one", 2: "two", 3: "three"}
set_value = {1, 2, 3, 4, 5}  # {1, 2, 3, 4, 5}
range_value = range(5)  # range(0, 5)
bytearray_value = bytearray(5)  # bytearray(b'\x00\x00\x00\x00\x00')
bytes_value = bytes(5)  # b'\x00\x00\x00\x00\x00'
memoryview_value = memoryview(b"Hello")  # <memory at ...>
complex_value = complex(1, 2)  # (1+2j)
frozenset_value = frozenset([1, 2, 3, 4, 5])  # frozenset({1, 2, 3, 4, 5})
type_of_integer = type(integer_value)  # <class 'int'>
id_of_integer = id(integer_value)  # (unique id)
dir_of_integer = dir(integer_value)  # (list of attributes and methods)
help_of_integer = None  # (help output, not assignable)
is_integer = isinstance(integer_value, int)  # True
is_int_subclass_object = issubclass(int, object)  # True
list_length = len(list_value)  # 5
list_max = max(list_value)  # 5
list_min = min(list_value)  # 1
list_sum = sum(list_value)  # 15
list_sorted = sorted(list_value)  # [1, 2, 3, 4, 5]
list_reversed = list(reversed(list_value))  # [5, 4, 3, 2, 1]
list_all = all(list_value)  # True
list_any = any(list_value)  # True
list_enumerated = list(enumerate(list_value))  # [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5)]
list_zipped = list(zip(list_value, tuple_value))  # [(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)]
list_mapped = list(map(lambda x: x * 2, list_value))  # [2, 4, 6, 8, 10]
list_filtered = list(filter(lambda x: x > 2, list_value))  # [3, 4, 5]
list_comprehension_mapped = [x * 2 for x in list_value]  # [2, 4, 6, 8, 10]
list_comprehension_filtered = [x for x in list_value if x > 2]  # [3, 4, 5]
dict_comprehension = {x: x * 2 for x in list_value}  # {1: 2, 2: 4, 3: 6, 4: 8, 5: 10}
set_comprehension = {x for x in list_value if x > 2}  # {3, 4, 5}
generator_mapped = (x * 2 for x in list_value)  # (generator object)
generator_filtered = (x for x in list_value if x > 2)  # (generator object)
set_union = {1, 2, 3} | {3, 4, 5}  # {1, 2, 3, 4, 5}
set_intersection = {1, 2, 3} & {3, 4, 5}  # {3}
set_difference = {1, 2, 3} - {3, 4, 5}  # {1, 2}
set_symmetric_difference = {1, 2, 3} ^ {3, 4, 5}  # {1, 2, 4, 5}
is_subset = {1, 2, 3}.issubset({1, 2, 3, 4, 5})  # True
is_superset = {1, 2, 3}.issuperset({1, 2})  # True
is_disjoint = {1, 2, 3}.isdisjoint({4, 5})  # True
set_add = {1, 2, 3}; set_add.add(4)  # {1, 2, 3, 4}
set_remove = {1, 2, 3}; set_remove.remove(2)  # {1, 3}
set_discard = {1, 2, 3}; set_discard.discard(2)  # {1, 3}
set_pop = {1, 2, 3}; popped_value = set_pop.pop()  # (popped value, e.g., 1)
set_clear = {1, 2, 3}; set_clear.clear()  # {}
set_copy = {1, 2, 3}.copy()  # {1, 2, 3}
set_update = {1, 2, 3}; set_update.update({4, 5})  # {1, 2, 3, 4, 5}
set_intersection_method = {1, 2, 3}.intersection({3, 4, 5})  # {3}
set_union_method = {1, 2, 3}.union({4, 5})  # {1, 2, 3, 4, 5}
set_difference_method = {1, 2, 3}.difference({3, 4, 5})  # {1, 2}
set_symmetric_difference_method = {1, 2, 3}.symmetric_difference({3, 4, 5})  # {1, 2, 4, 5}

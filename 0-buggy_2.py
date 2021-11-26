
def sum(*args):
    total_sum = 0
    for number in args:
        total_sum += number
    return total_sum
result = sum(1, 3, 4, 5, 8, 9, 16)
print({ 'result': result })

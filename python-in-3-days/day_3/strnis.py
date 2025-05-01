def transform_sentence(sentence):
    words = sentence.split()
    result = []

    for word in words:
        if len(word) == 0:
            result.append(word)
            continue
        
        new_word = word[0]  # Keep the first letter unchanged
        for i in range(1, len(word)):
            prev_char = word[i - 1]  # Previous letter
            curr_char = word[i]     # Current letter
            if prev_char.lower() < curr_char.lower():
                new_word += curr_char.upper()  # Uppercase if previous letter comes earlier
            else:
                new_word += curr_char.lower()  # Lowercase otherwise
        result.append(new_word)

    return ' '.join(result)

input_str = input()
print(transform_sentence(input_str))
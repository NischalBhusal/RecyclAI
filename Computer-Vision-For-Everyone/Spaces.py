import cv2 as cv
import matplotlib.pyplot as plt

img = cv.imread('nischal.jpg')
cv.imshow('Nischal', img)

plt.imshow(img)
plt.show()

# #BGR to Gray
# gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
# cv.imshow('Gray',gray)

# #BGR to HSV
# hsv = cv.cvtColor(img, cv.COLOR_BGR2HSV)
# cv.imshow('HSV', hsv)




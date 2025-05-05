import cv2 as cv
import numpy as np

img = cv.imread('nischal.jpg')
cv.imshow('Nischal', img)

#Translation
def translate(img, x, y):
    transMat = np.float32([[1, 0, x], [0, 1, y]])
    dimensions = (img.shape[1], img.shape[0])
    return cv.warpAffine(img, transMat, dimensions)
translated = translate(img, 100, 100)
cv.imshow('Translated', translated)

#Rotation
def rotate(img, angle, rotPoint=None):
    (h, w) = img.shape[:2]
    if rotPoint is None:
        rotPoint = (w // 2, h // 2)
    rotMat = cv.getRotationMatrix2D(rotPoint, angle, 1.0)
    dimensions = (w, h)
    return cv.warpAffine(img, rotMat, dimensions)
rotated = rotate(img, 45)
cv.imshow('Rotated', rotated)
rotated = rotate(img, 90)
cv.imshow('Rotated 90', rotated)


cv.waitKey(0)
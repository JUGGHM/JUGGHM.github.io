import cv2
import os
import numpy as np

for name in os.listdir():
    if 'jpg' not in name and 'png' not in name:
        continue

    img = cv2.imread(name)
    h, w, _ = img.shape


    if h < w:
        img = cv2.resize(img, (1000, 600))

    else:
        width_new = int(600 * w / h)
        pad_left = (1000 - width_new) // 2
        pad_right = 1000 - width_new - pad_left

        img = cv2.resize(img, (width_new, 600))
        img = np.pad(img, ((0, 0), (pad_left, pad_right), (0, 0)), 'constant')

    cv2.imwrite(os.path.join('processed', name[:-4]+'.jpg'), img)
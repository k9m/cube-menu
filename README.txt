CubeMenu
========

3D-cube shaped menubar and social bar, it performs a 3D roll on hover.  

The width and height of the cube is adjustable, 
all sides of the cube can be set, but the animation is not implemented yet.

Issues:
=======
# Supported by all major browsers except IE of course, will need to look into this.
# Hiding the menu until it's laid out
# Conent of 2nd side of the cube is duplicated if both sides of the cube should 
  be clickable (dynamically calling the 2nd link?)  


TODO
==== 
# 3D image rotator 
# other dom elements (tables et...)  


Acknowledgements:
=================
This plugin was inspired by this fantastic tutorial by David DeSandro:

Intro CSS into 3D transforms - http://desandro.github.io/3dtransforms/docs/introduction.html

The CSS transformation had been taken from here, but I rewrote the API using JQuery and 
one-line initialisation to make it flexible.  
 


import math

class Circle:
    def __init__(self, *, radius=None, diameter=None):
        if radius is not None:
            self._radius = radius
        elif diameter is not None:
            self._radius = diameter / 2
        else:
            raise ValueError("Must specify either radius or diameter.")

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        self._radius = value

    @property
    def diameter(self):
        return self._radius * 2

    @diameter.setter
    def diameter(self, value):
        self._radius = value / 2

    @property
    def area(self):
        return math.pi * (self._radius ** 2)

    def __str__(self):
        return f"Circle(radius={self.radius:.2f}, diameter={self.diameter:.2f}, area={self.area:.2f})"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented


# === Example usage ===

if __name__ == "__main__":
    circle1 = Circle(radius=3)
    circle2 = Circle(diameter=8)
    circle3 = Circle(radius=5)

    print(circle1)
    print(circle2)
    print(circle3)

    # Add circles
    new_circle = circle1 + circle2
    print(f"circle1 + circle2 = {new_circle}")

    # Compare
    print(f"circle1 == circle2: {circle1 == circle2}")
    print(f"circle1 < circle3: {circle1 < circle3}")

    # Sort list of circles
    circles = [circle1, circle2, circle3]
    sorted_circles = sorted(circles)

    print("\nSorted circles:")
    for c in sorted_circles:
        print(c)

import turtle

def draw_circle(circle, color="blue"):
    t = turtle.Turtle()
    t.hideturtle()
    t.color(color)
    t.penup()
    t.goto(0, -circle.radius)
    t.pendown()
    t.circle(circle.radius)

if __name__ == "__main__":
    # ... le reste de ton code ...

    turtle.speed(0)
    turtle.bgcolor("white")

    x = -200
    for i, c in enumerate(sorted_circles):
        draw = turtle.Turtle()
        draw.penup()
        draw.goto(x, -c.radius)
        draw.pendown()
        draw.circle(c.radius)
        x += c.diameter + 10  #

    turtle.done()

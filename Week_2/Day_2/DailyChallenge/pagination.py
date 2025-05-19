class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_page = 1

    def get_visible_items(self):
        start = (self.current_page - 1) * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def next_page(self):
        if self.current_page < self.total_pages():
            self.current_page += 1
        return self

    def prev_page(self):
        if self.current_page > 1:
            self.current_page -= 1
        return self

    def first_page(self):
        self.current_page = 1
        return self

    def last_page(self):
        self.current_page = self.total_pages()
        return self

    def go_to_page(self, page_num):
        if not (1 <= page_num <= self.total_pages()):
            raise ValueError("Invalid page number")
        self.current_page = page_num
        return self

    def total_pages(self):
        return (len(self.items) + self.page_size - 1) // self.page_size

    def __str__(self):
        return f"{self.get_visible_items()}"

alphabet = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabet, 4)

print(p.get_visible_items())  
p.next_page()
print(p.get_visible_items()) 
p.last_page()
print(p.get_visible_items())  
p.go_to_page(3)
print(p.get_visible_items())  
p.prev_page()
print(p.get_visible_items()) 

try:
    p.go_to_page(100)
except ValueError as e:
    print(e)  

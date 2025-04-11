# How I Implemented Mocking in My Tests


When testing my Order class, I didn't want to use actual Customer and Product objects because that would complicate things. Instead, I created "fake" versions (mocks) that look and behave like the real things but are completely under my control

I used Jest's handy `jest.fn()` function to create these mock methods that return whatever values I needed for my tests.


The beauty of mocking is that I could test my Order class all by itself. If something was wrong with my Customer or Product classes, it wouldn't affect my Order tests. This isolation helps pinpoint exactly where problems might be occurring.


With mocks, I could verify that my Order class was "talking" to other classes correctly. Using Jest's `toHaveBeenCalled()` and `toHaveBeenCalledTimes()` methods, I confirmed that Order was asking for the right information from Customer and Product at the right times when creating an order summary.

By programming my mocks to return specific values (like customer names or product prices), I created a completely predictable test environment. This way, I always knew exactly what inputs my Order class was working with.

I also used Jest's `spyOn` feature to watch how Order's own methods (like `calculateTotalCost`) were behaving. This helped ensure that the internal calculations were correctly using information from the Customer and Product objects.

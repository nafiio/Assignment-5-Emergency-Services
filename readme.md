### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   Answer:getElementById হচ্ছে ইউনিক একটা এলিমেন্ট কেই ধরা যাবে একই আইডি যদি একাধিক এলিমেন্টে থাকে প্রথম এলিমেন্ট কে ধরবে।
    getElementByClassName একাধিক Element অথবা nodeList Access করা যাবে class Name দিয়ে।

    querySelector হচ্ছে css selector এর মতো id# দিয়ে Access করতে হয়।

    querySelectorAll css .class দিয়ে Access করতে হয়।

2. How do you **create and insert a new element into the DOM**?

   Answer:html file এ একটি div container কে Id দিয়ে js dom এ Access করতে হবে।এরপর createElement দিয়ে element create করতে হবে:div/h1/p...
   Container এর inner html or inner text set করে appenedChild করতে হবে।

3. What is **Event Bubbling** and how does it work?

   Answer:Event bubbling হচ্ছে element এর parent access করে parent থেকে অন্য parent এর child access করা যায়, inner text or inner html ও নেওয়া যায়। এটাকে traverse system বলে।

4. What is **Event Delegation** in JavaScript? Why is it useful?

   Answer:Event delegation হচ্ছে যেকোনো parent ধরে একটা class add করে সব কাজ করা যায় ।Loop use করতে হয় না ফলে code clean থাকে website দেরিতে reload হয় না দ্রুত কাজ করে।

5. What is the difference between **preventDefault() and stopPropagation()** methods?

   Answer:preventDefault() website এর default value control করে।
   stopPropagation() যে element এ use করা হয় তার parent এ যেতে বাধা দেয়।

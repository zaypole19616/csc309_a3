## TO-DO in this file

- Include names of your team members
- Explain the features of your web application, the end-user and how s/he might use it.
- A note if you plan on submitting the assignment late.

## Group Members
- Student 1: HUADONG XING (1003606234)
- Student 2: RAN WEI (1001665361)
- Student 3: YI QIAN LI (1001480088)
- Student 4: YILIN ZHANG (1001449783)

## Features
- First, when user open the website, he will see the login page (probably, there will be a register page as well in final project). User login the website by using a username and password, (for now it just a pre-define username and password which verify process are on local, please use the following info to login: username: admin, password: password). After a successful login, user will be granted permission to enter the market's main page.
- In the main page of the market, user can browse all the items listing on the market (In a2, all items are hard coded in html, will be changed to fetch data from sever in final project). By clicking the title of the items, user can enter a detail description page of that item, user can see the price, picture and detail description about the item. (In the item detail page, user can choose to go back to the main page or enter the purchase page which allow user to buy this item. /final project only/)
- Back to the main page, there is a buy currencies button on bottom of this page, click this button will bring user into a currencies exchange page. Since all transaction on our website are settle using cryptocurrency, currencies issue by government, such as USD or CAD, will not be accepted. User can see the real-time exchange rate from cryptocurrency to USD (We are using API provide by coinmarketcap.com who offer virtual currencies prices in real time to calculate how much user have to pay). After buying some cryptocurrency, user can go back to main page by click the back button and start shopping.
- In order to satisfied the requirement of this assignment, all “pages” are in index.html, click each button will cause some div to show or hide. In final project, we will use route to jump back and forth.
